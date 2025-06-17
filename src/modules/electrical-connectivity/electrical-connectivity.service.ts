// src/electrical-connectivity/electrical-connectivity.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ElectricalConnectivity } from '../../entities/electrical-connectivity.entity';
import { UpdateElectricalConnectivityDto } from '../../common/dtos/update-electrical-connectivity.dto';

@Injectable()
export class ElectricalConnectivityService {
  constructor(
    @InjectRepository(ElectricalConnectivity)
    private repo: Repository<ElectricalConnectivity>,
  ) {}

  async getStatus(): Promise<ElectricalConnectivity> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create({
        totalCoveragePercentage: 100,
        solarPercentage: 0,
        gridPercentage: 0,
        renewablePercentage: 0,
      });
      await this.repo.save(record);
    }
    return record;
  }

async updateStatus(dto: UpdateElectricalConnectivityDto): Promise<ElectricalConnectivity> {
  let record = await this.repo.findOne({ where: {} });

  // Use provided values, or fallback to existing record, or 0
  const rawSolar = dto.solarPercentage ?? record?.solarPercentage ?? 0;
  const rawGrid = dto.gridPercentage ?? record?.gridPercentage ?? 0;
  const rawRenewable = dto.renewablePercentage ?? record?.renewablePercentage ?? 0;

  const total = 534;

  // Normalize values to percentages (avoid division by zero)
  const solarPercentage = total > 0 ? +(rawSolar / total * 100).toFixed(2) : 0;
  const gridPercentage = total > 0 ? +(rawGrid / total * 100).toFixed(2) : 0;
  const renewablePercentage = total > 0 ? +(rawRenewable / total * 100).toFixed(2) : 0;

  const totalCoveragePercentage = solarPercentage + gridPercentage + renewablePercentage;

  if (!record) {
    record = this.repo.create({
      solarPercentage,
      gridPercentage,
      renewablePercentage,
      totalCoveragePercentage,
    });
  } else {
    record.solarPercentage = solarPercentage;
    record.gridPercentage = gridPercentage;
    record.renewablePercentage = renewablePercentage;
    record.totalCoveragePercentage = totalCoveragePercentage;
  }

  return this.repo.save(record);
}




}
