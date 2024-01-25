import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
   
  }
  findOne(id: string) {
    return {
      user: {
        id: id,
      },
    };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
