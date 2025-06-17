// src/workshop-status/workshop-status.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateWorkshopStatusDto } from '../../common/dtos/update-worshop-status.dto';
import { WorkshopStatus } from '../../entities/workshop-status.entity';

@Injectable()
export class WorkshopStatusService {
  constructor(
    @InjectRepository(WorkshopStatus)
    private readonly workshopStatusRepository: Repository<WorkshopStatus>,
  ) {}

async getStatus(): Promise<WorkshopStatus> {
  let status = await this.workshopStatusRepository.findOne({ where: {} }); // fix
  if (!status) {
    status = this.workshopStatusRepository.create({ available: 0, stillNeeded: 0 });
    await this.workshopStatusRepository.save(status);
  }
  return status;
}

async updateStatus(updateDto: UpdateWorkshopStatusDto): Promise<WorkshopStatus> {
  let status = await this.workshopStatusRepository.findOne({ where: {} }); // fix
  if (!status) {
    status = this.workshopStatusRepository.create(updateDto);
  } else {
    status.available = updateDto.available;
    status.stillNeeded = updateDto.stillNeeded;
  }
  return this.workshopStatusRepository.save(status);
}

}