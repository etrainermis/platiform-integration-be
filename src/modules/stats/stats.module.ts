// src/stats/stats.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { Stat } from '../../entities/stat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stat])],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {}
