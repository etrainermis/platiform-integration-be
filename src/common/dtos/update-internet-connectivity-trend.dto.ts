import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Month } from '../enums/Emonth.enum';

class TrendDataPointDto {
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

export class UpdateInternetConnectivityTrendDto {
  @ApiProperty({ type: [TrendDataPointDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TrendDataPointDto)
  trendData: TrendDataPointDto[];

  @ApiProperty()
  @IsNumber()
  startingPointPercentage: number;

  @ApiProperty()
  @IsNumber()
  currentPercentage: number;

  @ApiProperty()
  @IsNumber()
  growthPercentage: number;
}