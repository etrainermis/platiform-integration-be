// src/stats/stats.controller.ts
import { Controller, Patch, Body, Get, Param } from '@nestjs/common';
import { StatsService } from './stats.service';
import { UpdateStatDto } from '../../common/dtos/update-stat.dto';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  
  @Get()
  getAllStats() {
    return this.statsService.getAllStats();
  }

  @Get(':type')
  getStatByType(@Param('type') type: string) {
    return this.statsService.getStatByType(type);
  }
  @Patch()
  updateStat(@Body() dto: UpdateStatDto) {
    return this.statsService.updateStat(dto);
  }
}
