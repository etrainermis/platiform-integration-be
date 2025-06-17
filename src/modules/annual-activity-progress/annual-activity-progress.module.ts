import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualActivityProgress } from '../../entities/annual-activity-progress.entity';
import { AnnualActivityProgressService } from './annual-activity-progress.service';
import { AnnualActivityProgressController } from './annual-activity-progress.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AnnualActivityProgress])],
  providers: [AnnualActivityProgressService],
  controllers: [AnnualActivityProgressController],
})
export class AnnualActivityProgressModule {}