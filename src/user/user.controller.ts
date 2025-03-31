/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() req: any) {
    const { data } = req;
    const generatedId = await this.userService.create(data);
    return { id: generatedId };
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
}
