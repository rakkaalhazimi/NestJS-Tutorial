import { Module } from '@nestjs/common';
import { MeetingModule } from '../meeting/meeting.module';
import { MeetingService } from '../meeting/meeting.service';
import { MessagingService } from '../messaging/messaging.service';
import { UserModule } from '../user/user.module';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [UserModule, MeetingModule],
  providers: [
    // Providing MeetingService will resolve the error
    SchedulerService, 
    // MeetingService
  ],
  exports: [SchedulerService]
})
export class SchedulerModule {}
