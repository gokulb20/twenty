import { type PartialWorkspaceMember } from '@/settings/roles/types/RoleWithPartialMembers';
import { createState } from 'crewm8-ui/utilities';

export const currentWorkspaceMembersState = createState<
  PartialWorkspaceMember[]
>({
  key: 'currentWorkspaceMembersState',
  defaultValue: [],
});
