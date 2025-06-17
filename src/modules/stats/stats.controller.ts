// src/stats/stats.controller.ts
import { Controller, Patch, Body } from '@nestjs/common';
import { StatsService } from './stats.service';
import { UpdateStatDto } from '../../common/dtos/update-stat.dto';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Patch()
  updateStat(@Body() dto: UpdateStatDto) {
    return this.statsService.updateStat(dto);
  }
}
