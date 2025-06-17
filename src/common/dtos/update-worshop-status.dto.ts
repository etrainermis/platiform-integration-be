import { IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateWorkshopStatusDto {
  @ApiProperty({ description: 'Number of available workshops', example: 80 })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  available: number;

  @ApiProperty({ description: 'Number of workshops still needed', example: 41 })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  stillNeeded: number;
}