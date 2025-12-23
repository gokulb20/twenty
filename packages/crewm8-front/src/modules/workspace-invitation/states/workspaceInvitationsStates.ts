import { type WorkspaceInvitation } from '@/workspace-member/types/WorkspaceMember';
import { createState } from 'crewm8-ui/utilities';

export const workspaceInvitationsState = createState<
  Omit<WorkspaceInvitation, '__typename'>[]
>({
  key: 'workspaceInvitationsState',
  defaultValue: [],
});
