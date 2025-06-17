import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentPerformanceAnalysis } from '../../entities/student-performance-analysis.entity';
import { StudentPerformanceAnalysisService } from './student-performance-analysis.service';
import { StudentPerformanceAnalysisController } from './student-performance-analysis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentPerformanceAnalysis])],
  providers: [StudentPerformanceAnalysisService],
  controllers: [StudentPerformanceAnalysisController],
})
export class StudentPerformanceAnalysisModule {}
