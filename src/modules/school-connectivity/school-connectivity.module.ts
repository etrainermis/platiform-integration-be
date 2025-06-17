import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolConnectivity } from '../../entities/school-connectivity.entity';
import { SchoolConnectivityService } from './school-connectivity.service';
import { SchoolConnectivityController } from './school-connectivity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolConnectivity])],
  controllers: [SchoolConnectivityController],
  providers: [SchoolConnectivityService],
})
export class SchoolConnectivityModule {}