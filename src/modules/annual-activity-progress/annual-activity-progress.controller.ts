import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { AnnualActivityProgressService } from './annual-activity-progress.service';
import { AnnualActivityProgress } from '../../entities/annual-activity-progress.entity';
import { UpdateAnnualActivityProgressDto } from '../../common/dtos/update-annual-activity-progress.dto';

@Controller('annual-activity-progress')
export class AnnualActivityProgressController {
  constructor(private readonly service: AnnualActivityProgressService) {}

  @Get()
  getStatus(): Promise<AnnualActivityProgress> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() dto: UpdateAnnualActivityProgressDto,
  ): Promise<AnnualActivityProgress> {
    return this.service.updateStatus(dto);
  }
}