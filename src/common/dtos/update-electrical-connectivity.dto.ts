// src/electrical-connectivity/dto/update-electrical-connectivity.dto.ts
import { IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateElectricalConnectivityDto {


  @ApiProperty()
  @IsNumber()
  @Min(0)
  solarPercentage: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  gridPercentage: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  renewablePercentage: number;
}
