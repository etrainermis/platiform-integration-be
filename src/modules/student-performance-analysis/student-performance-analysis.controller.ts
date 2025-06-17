import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { StudentPerformanceAnalysisService } from './student-performance-analysis.service';
import { UpdateStudentPerformanceAnalysisDto } from '../../common/dtos/update-student-performance-analysis.dto';
import { StudentPerformanceAnalysis } from '../../entities/student-performance-analysis.entity';

@Controller('student-performance-analysis')
export class StudentPerformanceAnalysisController {
  constructor(private readonly service: StudentPerformanceAnalysisService) {}

  @Get()
  getStatus(): Promise<StudentPerformanceAnalysis> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() dto: UpdateStudentPerformanceAnalysisDto,
  ): Promise<StudentPerformanceAnalysis> {
    return this.service.updateStatus(dto);
  }
}
