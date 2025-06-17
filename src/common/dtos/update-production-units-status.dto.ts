import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductionUnitsStatusDto {
  @ApiProperty({ example: 60.5, description: 'Percentage of operational production units' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  operationalPercentage: number;

  @ApiProperty({ example: 25, description: 'Percentage of production units under maintenance' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  maintenancePercentage: number;

  @ApiProperty({ example: 14.5, description: 'Percentage of non-operational production units' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  notOperationalPercentage: number;
}