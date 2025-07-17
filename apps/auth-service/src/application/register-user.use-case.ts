import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from '../interface/dtos/register-user.dto';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(registerUserDto: RegisterUserDto): Promise<User> {
    const { email, password, name } = registerUserDto;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    user.name = name;

    return this.userRepository.save(user);
  }
} 