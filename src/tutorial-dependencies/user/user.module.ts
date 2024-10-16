import { Module, forwardRef } from '@nestjs/common';
import { MeetingModule } from '../meeting/meeting.module';
import { MessagingModule } from '../messaging/messaging.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MessagingModule,
    // We can only use forwardRef from here but not the other way around.
    // MeetingModule,
    forwardRef(() => MeetingModule)
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
