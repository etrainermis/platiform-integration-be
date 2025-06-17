import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { ProductionUnitsStatusService } from './production-units-status.service';
import { ProductionUnitsStatus } from '../../entities/production-units-status.entity';
import { UpdateProductionUnitsStatusDto } from '../../common/dtos/update-production-units-status.dto';

@Controller('production-units-status')
export class ProductionUnitsStatusController {
  constructor(private readonly service: ProductionUnitsStatusService) {}

  @Get()
  getStatus(): Promise<ProductionUnitsStatus> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() updateDto: UpdateProductionUnitsStatusDto,
  ): Promise<ProductionUnitsStatus> {
    return this.service.updateStatus(updateDto);
  }
}