import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolConnectivity } from '../../entities/school-connectivity.entity';
import { UpdateSchoolConnectivityDto } from '../../common/dtos/update-school-connectivity.dto';

@Injectable()
export class SchoolConnectivityService {
  constructor(
    @InjectRepository(SchoolConnectivity)
    private readonly repo: Repository<SchoolConnectivity>,
  ) {}

  async getStatus(): Promise<SchoolConnectivity> {
    let status = await this.repo.findOne({ where: {} });
    if (!status) {
      status = this.repo.create({ connectedPercentage: 0, unconnectedPercentage: 0 });
      await this.repo.save(status);
    }
    return status;
  }

  async updateStatus(updateDto: UpdateSchoolConnectivityDto): Promise<SchoolConnectivity> {
    let status = await this.repo.findOne({ where: {} });
    if (!status) {
      status = this.repo.create(updateDto);
    } else {
      status.connectedPercentage = updateDto.connectedPercentage;
      status.unconnectedPercentage = updateDto.unconnectedPercentage;
    }
    return this.repo.save(status);
  }
}