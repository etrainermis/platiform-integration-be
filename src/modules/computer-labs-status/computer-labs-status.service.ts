import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComputerLabsStatus } from '../../entities/computer-labs-status.entity';
import { UpdateComputerLabsStatusDto } from '../../common/dtos/update-computer-labs-status.dto';

@Injectable()
export class ComputerLabsStatusService {
  constructor(
    @InjectRepository(ComputerLabsStatus)
    private repo: Repository<ComputerLabsStatus>,
  ) {}

  async getStatus(): Promise<ComputerLabsStatus> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create({ labsNeeded: 0, gapsToEquipAllSchools: 0, currentLabs: 0 });
      await this.repo.save(record);
    }
    return record;
  }

  async updateStatus(dto: UpdateComputerLabsStatusDto): Promise<ComputerLabsStatus> {
    let record = await this.repo.findOne({ where: {} });
    if (!record) {
      record = this.repo.create(dto);
    } else {
      Object.assign(record, dto);
    }
    return this.repo.save(record);
  }
}