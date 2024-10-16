import { Injectable } from '@nestjs/common';
import { MessagingService } from '../messaging/messaging.service';

@Injectable()
export class UserService {
  // Won't throw error if the module didn't import MessagingModule
  constructor(private readonly messagingService: MessagingService) {}
  
  async userSendMessage() {
    return await this.messagingService.sendMessage();
  }
}