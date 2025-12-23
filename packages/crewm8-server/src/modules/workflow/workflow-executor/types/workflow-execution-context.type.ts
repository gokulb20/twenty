import { type ActorMetadata } from 'crewm8-shared/types';

import { type RolePermissionConfig } from 'src/engine/twenty-orm/types/role-permission-config';

export type WorkflowExecutionContext = {
  isActingOnBehalfOfUser: boolean;
  initiator: ActorMetadata;
  rolePermissionConfig: RolePermissionConfig;
};
