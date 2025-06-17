import { IsEnum, IsNumber } from 'class-validator';
import { Month } from '../enums/Emonth.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrendMonthDto {
  @ApiProperty({ enum: Month })
  @IsEnum(Month)
  month: Month;

  @ApiProperty()
  @IsNumber()
  connectedSchoolsPercentage: number;

  @ApiProperty()
  @IsNumber()
  targetPercentage: number;
}

