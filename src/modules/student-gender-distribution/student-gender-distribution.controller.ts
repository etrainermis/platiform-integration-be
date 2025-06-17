import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { StudentGenderDistributionService } from './student-gender-distribution.service';
import { UpdateStudentGenderDistributionDto } from '../../common/dtos/update-student-gender-distribution.dto';
import { StudentGenderDistribution } from '../../entities/student-gender-distribution.entity';

@Controller('student-gender-distribution')
export class StudentGenderDistributionController {
  constructor(private readonly service: StudentGenderDistributionService) {}

  @Get()
  getStatus(): Promise<StudentGenderDistribution> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() updateDto: UpdateStudentGenderDistributionDto,
  ): Promise<StudentGenderDistribution> {
    return this.service.updateStatus(updateDto);
  }
}