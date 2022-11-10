import { Body, Controller, Post, Req } from '@nestjs/common';

import { AuthDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: AuthDto) {
    console.log(body);
    return this.authService.login();
  }

  @Post('register')
  register(@Body() body: AuthDto) {
    return this.authService.register(body);
  }
}
