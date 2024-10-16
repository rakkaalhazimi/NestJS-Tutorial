import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('tutorial-dependencies')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getHello() {
    return await this.userService.userSendMessage();
  }
}
