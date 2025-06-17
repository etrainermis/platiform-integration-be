// src/school-status/school-status.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { PedagogyCertifiedService} from './pedagogy-certified.service';

@Controller('pedagogy_certified')
export class PedagogyCertifiedController {
  constructor(private readonly pedagogyCertifiedService: PedagogyCertifiedService) {}

  @Get('certified')
  async getCertifiedSchools(
    @Query('limit') limit = 100,
    @Query('page') page = 0,
  ) {
    return this.pedagogyCertifiedService.getCertifiedSchools(Number(limit), Number(page));
  }
}
