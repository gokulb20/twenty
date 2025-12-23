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
