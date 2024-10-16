import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class MeetingService {
  constructor(private readonly userService: UserService) {}
  
  async meetingSendMessage() {
    this.userService.userSendMessage();
  }
}