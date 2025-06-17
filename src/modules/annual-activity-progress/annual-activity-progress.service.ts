import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnnualActivityProgress } from '../../entities/annual-activity-progress.entity';
import { UpdateAnnualActivityProgressDto } from '../../common/dtos/update-annual-activity-progress.dto';

@Injectable()
export class AnnualActivityProgressService {
  constructor(
    @InjectRepository(AnnualActivityProgress)
    private repo: Repository<AnnualActivityProgress>,
  ) {}

  async getStatus(): Promise<AnnualActivityProgress> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create({
        planningCompletedPercentage: 0,
        implementationCompletedPercentage: 0,
        monitoringCompletedPercentage: 0,
        evaluationCompletedPercentage: 0,
        reportingCompletedPercentage: 0,
      });
      await this.repo.save(record);
    }
    return record;
  }

  async updateStatus(dto: UpdateAnnualActivityProgressDto): Promise<AnnualActivityProgress> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create(dto);
    } else {
      Object.assign(record, dto);
    }
    return this.repo.save(record);
  }
}