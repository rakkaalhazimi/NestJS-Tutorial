import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { DecoratorService } from './decorator.service';
import { GetUser, User } from './user.decorator';

@Controller("tutorial-decorator")
export class DecoratorController {
  constructor(private readonly decoratorService: DecoratorService) {}
  
  @Post()
  userDecorator(@GetUser() user: User) {
    console.log('User from request: ', user);
  }
}
