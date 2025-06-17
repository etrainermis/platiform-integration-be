import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerLabsStatus } from '../../entities/computer-labs-status.entity';
import { ComputerLabsStatusService } from './computer-labs-status.service';
import { ComputerLabsStatusController } from './computer-labs-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ComputerLabsStatus])],
  providers: [ComputerLabsStatusService],
  controllers: [ComputerLabsStatusController],
})
export class ComputerLabsStatusModule {}