import { Module } from '@nestjs/common';
import { MeetingModule } from './meeting/meeting.module';
import { MessagingModule } from './messaging/messaging.module';
import { UserModule } from './user/user.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [
    MeetingModule, 
    MessagingModule, 
    UserModule,
    SchedulerModule
  ]
})
export class DependenciesModule {}
