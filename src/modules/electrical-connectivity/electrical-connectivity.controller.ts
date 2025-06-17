// src/electrical-connectivity/electrical-connectivity.controller.ts
import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { ElectricalConnectivityService } from './electrical-connectivity.service';
import { ElectricalConnectivity } from '../../entities/electrical-connectivity.entity';
import { UpdateElectricalConnectivityDto } from '../../common/dtos/update-electrical-connectivity.dto';

@Controller('electrical-connectivity')
export class ElectricalConnectivityController {
  constructor(private readonly service: ElectricalConnectivityService) {}

  @Get()
  getStatus(): Promise<ElectricalConnectivity> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() dto: UpdateElectricalConnectivityDto,
  ): Promise<ElectricalConnectivity> {
    return this.service.updateStatus(dto);
  }
}
