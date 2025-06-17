import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSchoolConnectivityDto {
  @ApiProperty({ example: 75.5, description: 'Percentage of connected schools' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  connectedPercentage: number;

  @ApiProperty({ example: 24.5, description: 'Percentage of unconnected schools' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  unconnectedPercentage: number;
}