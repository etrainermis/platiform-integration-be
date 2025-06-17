import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentGenderDistribution } from '../../entities/student-gender-distribution.entity';
import { StudentGenderDistributionService } from './student-gender-distribution.service';
import { StudentGenderDistributionController } from './student-gender-distribution.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentGenderDistribution])],
  controllers: [StudentGenderDistributionController],
  providers: [StudentGenderDistributionService],
})
export class StudentGenderDistributionModule {}