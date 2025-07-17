import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';
import { User as PrismaUser } from '../../generated/prisma';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user ? this.toDomain(user) : null;
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user ? this.toDomain(user) : null;
  }

  async save(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: user,
    });
    return this.toDomain(createdUser);
  }

  private toDomain(prismaUser: PrismaUser): User {
    const user = new User();
    user.id = prismaUser.id;
    user.name = prismaUser.name;
    user.email = prismaUser.email;
    user.phone = prismaUser.phone;
    user.user_type = prismaUser.user_type;
    user.password = prismaUser.password;
    user.created_at = prismaUser.created_at;
    user.updated_at = prismaUser.updated_at;
    return user;
  }
} 