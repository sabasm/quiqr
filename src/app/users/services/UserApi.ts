import { CreateUserDto } from "../dto/CreateUserDto";


export class UserApi {
  async createUser(createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return { name, email };
  }
}


