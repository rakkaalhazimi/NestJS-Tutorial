export class UserRepository {
  
  async findUserById(id: number) {
    return {user: 'nestJS', id: id};
  }
  
}