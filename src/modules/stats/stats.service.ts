// src/stats/stats.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stat } from '../../entities/stat.entity';
import { UpdateStatDto } from '../../common/dtos/update-stat.dto';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Stat)
    private statRepository: Repository<Stat>,
  ) {}

  async updateStat(dto: UpdateStatDto) {
    let stat = await this.statRepository.findOne({ where: { type: dto.type } });

    if (!stat) {
      stat = this.statRepository.create({ type: dto.type });
    }

    stat.currentNumber = dto.currentNumber;
    stat.totalNumber = dto.totalNumber;

    await this.statRepository.save(stat);
    return { message: 'Statistic updated successfully', data: stat };
  }
}
