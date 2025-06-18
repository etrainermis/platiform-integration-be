// src/career-portal-users/career-portal-users.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { InserjeuneService } from './inserjeune.service';


@Controller('inserjeune-users')
export class InserjeuneController {
  constructor(private readonly usersService: InserjeuneService) {}

  @Get()
  async getUsers(
   
  ) {
    return this.usersService.getUsers();
  }
}
