import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionUnitsStatus } from '../../entities/production-units-status.entity';
import { ProductionUnitsStatusService } from './production-units-status.service';
import { ProductionUnitsStatusController } from './production-units-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductionUnitsStatus])],
  controllers: [ProductionUnitsStatusController],
  providers: [ProductionUnitsStatusService],
})
export class ProductionUnitsStatusModule {}