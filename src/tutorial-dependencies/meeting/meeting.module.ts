import { Module, forwardRef } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MessagingService } from '../messaging/messaging.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    // I don't know why we can't use forwardRef from here.
    // We can only use forwardRef from UserModule.
    UserModule,
    // forwardRef(() => UserModule)
  ],
  providers: [MeetingService],
  exports: [MeetingService]
})
export class MeetingModule {}
