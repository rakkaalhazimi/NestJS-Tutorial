import { Test } from "@nestjs/testing";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";


describe('UserService', () => {
  
  let userService: UserService;
  let userRepository: UserRepository;
  let mockUserRepository: UserRepository = {
    findUserById: jest.fn()
  };
  
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: mockUserRepository
        }
      ]
    })
    .useMocker((token) => {
      
      console.log('token: ', token);
      
    })
    .compile();
    
    userService = moduleRef.get<UserService>(UserService);
  });
  
  describe('getUser', () => {
    it('return user object', async () => {
      let id = 1;
      jest.spyOn(mockUserRepository, 'findUserById').mockResolvedValue({user: 'nestJs', id: id});
      let user = await userService.getUser(id);
      expect(user.id).toBe(id);
    });
  });
  
  
});