import { Injectable } from '@nestjs/common';
import { MeetingService } from '../meeting/meeting.service';
import { UserService } from '../user/user.service';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly meetingService: MeetingService,
    private readonly userService: UserService
  ) {}
  
  async schedulerSendMessage() {
    this.meetingService.meetingSendMessage();
    this.userService.userSendMessage();
  }
}