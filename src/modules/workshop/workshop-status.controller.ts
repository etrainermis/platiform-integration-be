// src/workshop-status/workshop-status.controller.ts
import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { WorkshopStatusService } from './workshop-status.service';
import { UpdateWorkshopStatusDto } from '../../common/dtos/update-worshop-status.dto';
import { WorkshopStatus } from '../../entities/workshop-status.entity';

@Controller('workshop-status')
export class WorkshopStatusController {
  constructor(private readonly service: WorkshopStatusService) {}

  @Get()
  getStatus(): Promise<WorkshopStatus> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(@Body() updateDto: UpdateWorkshopStatusDto): Promise<WorkshopStatus> {
    return this.service.updateStatus(updateDto);
  }
}