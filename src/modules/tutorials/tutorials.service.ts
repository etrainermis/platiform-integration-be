// src/tutorials/tutorials.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tutorials } from '../../entities/tutorials.entity';
import { UpdateTutorialsDto } from '../../common/dtos/update-tutorials.dto';

@Injectable()
export class TutorialsService {
  constructor(
    @InjectRepository(Tutorials)
    private repo: Repository<Tutorials>,
  ) {}

  async getStatus(): Promise<Tutorials> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create({ numberOfTutorials: 0 });
      await this.repo.save(record);
    }
    return record;
  }

  async updateStatus(dto: UpdateTutorialsDto): Promise<Tutorials> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create(dto);
    } else {
      Object.assign(record, dto);
    }
    return this.repo.save(record);
  }
}
