import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateInternetConnectivityTrendDto } from '../../common/dtos/update-internet-connectivity-trend.dto';
import { InternetConnectivityTrend } from '../../entities/internet-connectivity-trend.entity';

@Injectable()
export class InternetConnectivityTrendService {
  constructor(
    @InjectRepository(InternetConnectivityTrend)
    private repo: Repository<InternetConnectivityTrend>,
  ) {}

  async getStatus(): Promise<InternetConnectivityTrend> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create({
        trendData: [],
        startingPointPercentage: 0,
        currentPercentage: 0,
        growthPercentage: 0,
      });
      await this.repo.save(record);
    }
    return record;
  }

  async updateStatus(dto: UpdateInternetConnectivityTrendDto): Promise<InternetConnectivityTrend> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create(dto);
    } else {
      // Merge trendData intelligently (update or insert by month)
      const updatedTrendData = [...record.trendData];
      for (const entry of dto.trendData) {
        const existingIndex = updatedTrendData.findIndex(
          (e) => e.month === entry.month,
        );
        if (existingIndex >= 0) {
          updatedTrendData[existingIndex] = entry;
        } else {
          updatedTrendData.push(entry);
        }
      }

      record.trendData = updatedTrendData;
      record.startingPointPercentage = dto.startingPointPercentage;
      record.currentPercentage = dto.currentPercentage;
      record.growthPercentage = dto.growthPercentage;
    }

    return this.repo.save(record);
  }
}
