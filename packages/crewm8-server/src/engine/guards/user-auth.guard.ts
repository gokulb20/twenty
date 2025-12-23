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
