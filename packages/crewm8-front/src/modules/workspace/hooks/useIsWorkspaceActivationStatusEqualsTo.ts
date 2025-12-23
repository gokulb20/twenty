import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { type WorkspaceActivationStatus } from 'crewm8-shared/workspace';

export const useIsWorkspaceActivationStatusEqualsTo = (
  activationStatus: WorkspaceActivationStatus,
): boolean => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  return currentWorkspace?.activationStatus === activationStatus;
};
