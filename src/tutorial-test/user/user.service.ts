import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  
  constructor(
    private readonly userRepository: UserRepository
  ) {}
  
  async getUser(id: number) {
    let user = this.userRepository.findUserById(id);
    console.log('userRepository: ', this.userRepository);
    console.log('user: ', user);
    return user;
  }
}