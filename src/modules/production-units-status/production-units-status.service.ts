import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductionUnitsStatus } from '../../entities/production-units-status.entity';
import { UpdateProductionUnitsStatusDto } from '../../common/dtos/update-production-units-status.dto';

@Injectable()
export class ProductionUnitsStatusService {
  constructor(
    @InjectRepository(ProductionUnitsStatus)
    private readonly repo: Repository<ProductionUnitsStatus>,
  ) {}

  async getStatus(): Promise<ProductionUnitsStatus> {
    let status = await this.repo.findOne({ where: {} });
    if (!status) {
      status = this.repo.create({
        operationalPercentage: 0,
        maintenancePercentage: 0,
        notOperationalPercentage: 0,
      });
      await this.repo.save(status);
    }
    return status;
  }

  async updateStatus(updateDto: UpdateProductionUnitsStatusDto): Promise<ProductionUnitsStatus> {
    let status = await this.repo.findOne({ where: {} });
    if (!status) {
      status = this.repo.create(updateDto);
    } else {
      status.operationalPercentage = updateDto.operationalPercentage;
      status.maintenancePercentage = updateDto.maintenancePercentage;
      status.notOperationalPercentage = updateDto.notOperationalPercentage;
    }
    return this.repo.save(status);
  }
}