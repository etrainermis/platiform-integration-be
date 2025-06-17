// src/student-performance-analysis/dto/performance-metric.dto.ts
import { IsInt, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PerformanceMetricDto {
  @ApiProperty()
  @IsInt()
  @Min(0)
  enrollment: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  graduation: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  performance: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  attendance: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  participation: number;
}
