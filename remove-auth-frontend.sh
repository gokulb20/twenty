#!/bin/bash

echo "=========================================="
echo "Bypassing Frontend Authentication"
echo "=========================================="

# Create a stub AuthProvider that always provides an authenticated user
cat > packages/crewm8-front/src/modules/auth/components/AuthBypassProvider.tsx << 'EOF'
import { ReactNode } from 'react';

/**
 * Auth Bypass Provider
 *
 * This replaces Twenty's authentication with a stub that assumes
 * the user is already authenticated via 0.email.
 *
 * TODO: Integrate with actual 0.email session
 */
export const AuthBypassProvider = ({ children }: { children: ReactNode }) => {
  console.log('🚫 Auth bypassed - using 0.email authentication');

  // Simply render children without any auth checks
  return <>{children}</>;
};
EOF

echo "✅ Created AuthBypassProvider"

# Update the router to skip auth pages
cat > packages/crewm8-front/src/modules/app/hooks/useCreateAppRouter.tsx << 'EOF'
import { AppRouterProviders } from '@/app/components/AppRouterProviders';
import { SettingsRoutes } from '@/app/components/SettingsRoutes';
import indexAppPath from '@/navigation/utils/indexAppPath';
import { DefaultLayout } from '@/ui/layout/page/components/DefaultLayout';
import { AppPath } from 'crewm8-shared/types';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import { NotFound } from '~/pages/not-found/NotFound';
import { RecordIndexPage } from '~/pages/object-record/RecordIndexPage';
import { RecordShowPage } from '~/pages/object-record/RecordShowPage';

/**
 * App Router - Auth Bypassed
 *
 * All authentication routes redirect to the main app.
 * Authentication is handled by 0.email.
 */
export const useCreateAppRouter = (
  isFunctionSettingsEnabled?: boolean,
  isAdminPageEnabled?: boolean,
) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<AppRouterProviders />}
        loader={async () => Promise.resolve(null)}
      >
        <Route element={<DefaultLayout />}>
          {/* Redirect all auth pages to main app */}
          <Route path={AppPath.Verify} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.VerifyEmail} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.SignInUp} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.Invite} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.ResetPassword} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.Authorize} element={<Navigate to="/objects/companies" replace />} />

          {/* Skip onboarding - go straight to app */}
          <Route path={AppPath.CreateWorkspace} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.CreateProfile} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.SyncEmails} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.InviteTeam} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.PlanRequired} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.PlanRequiredSuccess} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.BookCallDecision} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.BookCall} element={<Navigate to="/objects/companies" replace />} />

          {/* Main app routes */}
          <Route path={indexAppPath.getIndexAppPath()} element={<Navigate to="/objects/companies" replace />} />
          <Route path={AppPath.RecordIndexPage} element={<RecordIndexPage />} />
          <Route path={AppPath.RecordShowPage} element={<RecordShowPage />} />
          <Route
            path={AppPath.SettingsCatchAll}
            element={
              <SettingsRoutes
                isFunctionSettingsEnabled={isFunctionSettingsEnabled}
                isAdminPageEnabled={isAdminPageEnabled}
              />
            }
          />
          <Route path={AppPath.NotFoundWildcard} element={<NotFound />} />
        </Route>
      </Route>,
    ),
  );
EOF

echo "✅ Updated router to bypass auth pages"

echo ""
echo "=========================================="
echo "✅ Frontend Auth Bypass Complete!"
echo "=========================================="
echo ""
echo "Changes made:"
echo "  - All auth routes now redirect to /objects/companies"
echo "  - Onboarding steps skipped"
echo "  - Created AuthBypassProvider stub"
echo ""
echo "⚠️  Auth is now handled by 0.email (stub for now)"
echo ""
