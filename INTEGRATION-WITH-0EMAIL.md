# Crewm8 + 0.email Integration Guide

## Current Status

✅ **Completed:**
- Rebranded entire codebase from Twenty to Crewm8
- All packages renamed (twenty-* → crewm8-*)
- Authentication system bypassed
- All auth guards stubbed to always pass
- Frontend routing updated to skip sign-in pages

⚠️ **TODO - Install Dependencies:**

The development environment had network issues preventing dependency installation.
**You need to install dependencies locally:**

```bash
# In the project root
yarn install

# If yarn fails, you may need to:
yarn cache clean --all
yarn install

# Or use npm (less ideal for monorepo):
npm install
```

## Authentication Integration Strategy

### Current Auth Bypass

**Backend (packages/crewm8-server/src/engine/guards/):**
- `jwt-auth.guard.ts` - Always returns true, provides stub user
- `user-auth.guard.ts` - Always returns true
- `workspace-auth.guard.ts` - Always returns true

**Frontend (packages/crewm8-front/):**
- All auth routes (`/sign-in`, `/sign-up`, `/verify`, etc.) redirect to `/objects/companies`
- Onboarding steps skipped
- Router bypasses authentication

### Integration Steps with 0.email

#### Option 1: Shared Session (Recommended)

0.email and Crewm8 share the same authentication session.

**Backend Integration:**
1. Modify `jwt-auth.guard.ts` to read from 0.email's session
2. Extract user info from 0.email JWT or session cookie
3. Create/sync user in Crewm8 database

```typescript
// packages/crewm8-server/src/engine/guards/jwt-auth.guard.ts

async canActivate(context: ExecutionContext): Promise<boolean> {
  const request = context.switchToHttp().getRequest();

  // Read 0.email session (example)
  const emailSession = request.cookies['0email-session'];
  const user = await this.zeroEmailService.validateSession(emailSession);

  if (!user) {
    return false;
  }

  // Get or create Crewm8 user/workspace
  const crewm8User = await this.userService.findOrCreateUser(user);

  bindDataToRequestObject({
    user: crewm8User,
    workspace: crewm8User.defaultWorkspace,
    userWorkspaceId: crewm8User.workspaceId,
  }, request);

  return true;
}
```

**Frontend Integration:**
1. Share cookies/session storage between 0.email and Crewm8
2. If same domain, cookies auto-shared
3. If different domains, use SSO or token exchange

#### Option 2: API Integration

0.email provides a user token that Crewm8 validates.

**Flow:**
1. User authenticates with 0.email
2. 0.email generates a signed token
3. Crewm8 validates token with 0.email API
4. Crewm8 creates session for user

#### Option 3: Database-Level Integration

Both systems share the same `users` table.

**Database Schema:**
```sql
-- Shared in both 0.email and Crewm8
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  first_name VARCHAR,
  last_name VARCHAR,
  created_at TIMESTAMP,
  -- 0.email specific fields
  email_settings JSONB,
  -- Crewm8 specific fields
  default_workspace_id UUID
);
```

### Data Synchronization

**Contacts/Companies:**
- Email contacts from 0.email → Crewm8 People/Companies
- CRM contacts → 0.email address book
- Bidirectional sync via triggers or event bus

**Email-CRM Linking:**
- Link emails to CRM records (opportunities, deals)
- Show email thread in CRM contact view
- Show CRM info in 0.email sidebar

## File Structure

### Key Files to Modify

**Backend:**
- `packages/crewm8-server/src/engine/guards/jwt-auth.guard.ts` - Main auth guard
- `packages/crewm8-server/src/engine/core-modules/auth/auth.module.ts` - Auth module config
- `packages/crewm8-server/src/engine/core-modules/user/` - User management

**Frontend:**
- `packages/crewm8-front/src/modules/app/hooks/useCreateAppRouter.tsx` - Routing
- `packages/crewm8-front/src/modules/auth/` - Auth components (can be removed)

### Files That Can Be Deleted

Once 0.email integration is complete:

**Backend:**
```
packages/crewm8-server/src/engine/core-modules/auth/
├── controllers/ - OAuth controllers (DELETE)
├── dto/ - Auth DTOs (DELETE)
├── strategies/ - Passport strategies (DELETE)
└── token/ - JWT token services (REPLACE with 0.email integration)
```

**Frontend:**
```
packages/crewm8-front/src/modules/auth/
├── sign-in-up/ - Sign in pages (DELETE)
├── components/ - Auth UI (DELETE)
└── hooks/ - Auth hooks (REPLACE)
```

## Running the Application

### Prerequisites
- Node.js ^24.5.0
- Yarn >=4.0.2
- PostgreSQL 16
- Redis

### Setup

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Configure environment:**
   ```bash
   cp packages/crewm8-server/.env.example packages/crewm8-server/.env
   # Edit .env with your database credentials
   ```

3. **Initialize database:**
   ```bash
   npx nx database:reset crewm8-server
   ```

4. **Start development:**
   ```bash
   yarn start
   # This starts:
   # - Frontend: http://localhost:3001
   # - Backend: http://localhost:3000
   # - Worker: background job processor
   ```

### Access the App

- Open http://localhost:3001
- You'll be automatically "logged in" (auth bypassed)
- Default workspace: "Default Workspace"
- Default user: user@crewm8.com

## Next Steps

1. ✅ Install dependencies locally
2. ✅ Run the application
3. ✅ Verify it loads without errors
4. 🔲 Design 0.email integration architecture
5. 🔲 Implement shared authentication
6. 🔲 Sync contacts between systems
7. 🔲 Build unified UI navigation
8. 🔲 Remove auth code completely

## Testing Auth Bypass

To verify the auth bypass works:

1. Start the backend: `npx nx start crewm8-server`
2. Start the frontend: `npx nx start crewm8-front`
3. Open http://localhost:3001
4. Should go directly to Companies view (/objects/companies)
5. No sign-in page should appear

## Questions?

The auth bypass is intentionally simple to allow rapid integration with 0.email.
Customize the guards in `packages/crewm8-server/src/engine/guards/` to match your 0.email authentication strategy.
