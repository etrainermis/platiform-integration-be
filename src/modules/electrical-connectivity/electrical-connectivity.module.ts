// src/electrical-connectivity/electrical-connectivity.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectricalConnectivity } from '../../entities/electrical-connectivity.entity';
import { ElectricalConnectivityService } from './electrical-connectivity.service';
import { ElectricalConnectivityController } from './electrical-connectivity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ElectricalConnectivity])],
  providers: [ElectricalConnectivityService],
  controllers: [ElectricalConnectivityController],
})
export class ElectricalConnectivityModule {}
