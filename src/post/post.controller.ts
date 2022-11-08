import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('post')
export class PostController {
  @Get('/:id')
  findAll(@Req() req: Request): string {
    return 'This is all posts' + req.params.id;
  }
}
