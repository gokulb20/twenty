import { type ToolSet } from 'ai';
import { type CodeExecutionData } from 'crewm8-shared/ai';
import { type ActorMetadata } from 'crewm8-shared/types';

import { type ToolCategory } from 'src/engine/core-modules/tool-provider/enums/tool-category.enum';
import { type RolePermissionConfig } from 'src/engine/twenty-orm/types/role-permission-config';

export type CodeExecutionStreamEmitter = (data: CodeExecutionData) => void;

export type ToolProviderContext = {
  workspaceId: string;
  roleId: string;
  rolePermissionConfig: RolePermissionConfig;
  actorContext?: ActorMetadata;
  userId?: string;
  userWorkspaceId?: string;
  onCodeExecutionUpdate?: CodeExecutionStreamEmitter;
};

export interface ToolProvider {
  readonly category: ToolCategory;

  isAvailable(context: ToolProviderContext): Promise<boolean>;

  generateTools(context: ToolProviderContext): Promise<ToolSet>;
}
