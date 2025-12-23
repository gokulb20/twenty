#!/bin/bash

echo "=========================================="
echo "Removing Twenty Auth & Creating Bypasses"
echo "=========================================="

# Backend: Stub JWT Auth Guard to always pass
cat > packages/crewm8-server/src/engine/guards/jwt-auth.guard.ts << 'EOF'
import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';

import { bindDataToRequestObject } from 'src/engine/utils/bind-data-to-request-object.util';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor() {
    this.logger.log('🚫 JWT Auth BYPASSED - Using 0.email authentication');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // TODO: Get user from 0.email session
    // For now, create a stub authenticated user
    const stubData = {
      user: {
        id: 'stub-user-id',
        email: 'user@crewm8.com',
        firstName: 'Crewm8',
        lastName: 'User',
      },
      workspace: {
        id: 'stub-workspace-id',
        name: 'Default Workspace',
      },
      userWorkspaceId: 'stub-user-workspace-id',
    };

    bindDataToRequestObject(stubData, request, '1');

    return true; // Always allow - auth handled by 0.email
  }
}
EOF

echo "✅ Stubbed JWT Auth Guard"

# Backend: Stub User Auth Guard
cat > packages/crewm8-server/src/engine/guards/user-auth.guard.ts << 'EOF'
import { Injectable, type CanActivate, type ExecutionContext, Logger } from '@nestjs/common';

@Injectable()
export class UserAuthGuard implements CanActivate {
  private readonly logger = new Logger(UserAuthGuard.name);

  constructor() {
    this.logger.log('🚫 User Auth BYPASSED - Using 0.email authentication');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return true; // Always allow - auth handled by 0.email
  }
}
EOF

echo "✅ Stubbed User Auth Guard"

# Backend: Stub Workspace Auth Guard
cat > packages/crewm8-server/src/engine/guards/workspace-auth.guard.ts << 'EOF'
import { Injectable, type CanActivate, type ExecutionContext, Logger } from '@nestjs/common';

@Injectable()
export class WorkspaceAuthGuard implements CanActivate {
  private readonly logger = new Logger(WorkspaceAuthGuard.name);

  constructor() {
    this.logger.log('🚫 Workspace Auth BYPASSED - Using 0.email authentication');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return true; // Always allow - auth handled by 0.email
  }
}
EOF

echo "✅ Stubbed Workspace Auth Guard"

echo ""
echo "=========================================="
echo "✅ Auth Bypass Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Frontend auth removal script will run separately"
echo "2. Install dependencies: yarn install"
echo "3. Start the app: yarn start"
echo ""
echo "⚠️  NOTE: Authentication is now bypassed."
echo "    Integrate with 0.email for real auth."
echo ""
