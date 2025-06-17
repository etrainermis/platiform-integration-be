import { Type } from 'class-transformer';
import { ValidateNested, IsInt, IsOptional, Min } from 'class-validator';
import { PerformanceMetricDto } from './performance-metric.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentPerformanceAnalysisDto {
  @ApiProperty({ type: PerformanceMetricDto })
  @ValidateNested()
  @Type(() => PerformanceMetricDto)
  girls: PerformanceMetricDto;

  @ApiProperty({ type: PerformanceMetricDto })
  @ValidateNested()
  @Type(() => PerformanceMetricDto)
  boys: PerformanceMetricDto;


}
