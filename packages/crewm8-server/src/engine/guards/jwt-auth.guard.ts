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
