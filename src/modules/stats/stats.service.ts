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

  // Inside StatsService
async getAllStats() {
  const stats = await this.statRepository.find();
  return { message: 'Statistics fetched successfully', data: stats };
}

async getStatByType(type: string) {
  console.log('Requested stat type:', type); // Debug

  const stat = await this.statRepository.findOne({ where: { type } });

  if (!stat) {
    throw new NotFoundException(`Statistic with type "${type}" not found`);
  }

  return { message: 'Statistic fetched successfully', data: stat };
}


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
