import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { ComputerLabsStatusService } from './computer-labs-status.service';
import { ComputerLabsStatus } from '../../entities/computer-labs-status.entity';
import { UpdateComputerLabsStatusDto } from '../../common/dtos/update-computer-labs-status.dto';

@Controller('computer-labs-status')
export class ComputerLabsStatusController {
  constructor(private readonly service: ComputerLabsStatusService) {}

  @Get()
  getStatus(): Promise<ComputerLabsStatus> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() dto: UpdateComputerLabsStatusDto,
  ): Promise<ComputerLabsStatus> {
    return this.service.updateStatus(dto);
  }
}