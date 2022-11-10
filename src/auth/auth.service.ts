import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
// import { User, Note } from '@prisma/client';

@Injectable({})
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  login() {
    return {
      message: 'this is login',
    };
  }

  async register(authDto: AuthDto) {
    const hashedPassword = await argon.hash(authDto.password);
    const user = await this.prismaService.user.create({
      data: {
        email: authDto.email,
        hashedPassword,
        firstName: authDto.firstName || '',
        lastName: authDto.lastName || '',
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });
    return user;
  }
}
