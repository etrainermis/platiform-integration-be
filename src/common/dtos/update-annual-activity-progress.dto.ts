import { IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnnualActivityProgressDto {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  planningCompletedPercentage: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  implementationCompletedPercentage: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  monitoringCompletedPercentage: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  evaluationCompletedPercentage: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  reportingCompletedPercentage: number;
}