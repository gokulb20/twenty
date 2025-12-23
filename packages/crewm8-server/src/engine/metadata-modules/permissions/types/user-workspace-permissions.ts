import { type ObjectsPermissions } from 'crewm8-shared/types';
import { type PermissionFlagType } from 'crewm8-shared/constants';

export type UserWorkspacePermissions = {
  permissionFlags: Record<PermissionFlagType, boolean>;
  objectsPermissions: ObjectsPermissions;
};
