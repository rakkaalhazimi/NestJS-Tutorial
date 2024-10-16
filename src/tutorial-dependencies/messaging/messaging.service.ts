import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagingService {
  async sendMessage() {
    return 'Test message';
  }
}