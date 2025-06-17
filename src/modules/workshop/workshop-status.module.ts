// src/workshop-status/workshop-status.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopStatus } from '../../entities/workshop-status.entity';
import { WorkshopStatusService } from './workshop-status.service';
import { WorkshopStatusController } from './workshop-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WorkshopStatus])],
  controllers: [WorkshopStatusController],
  providers: [WorkshopStatusService],
})
export class WorkshopStatusModule {}