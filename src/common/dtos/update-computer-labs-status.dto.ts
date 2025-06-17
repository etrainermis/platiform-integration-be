import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateComputerLabsStatusDto {
  @ApiProperty()
  @IsInt()
  @Min(0)
  labsNeeded: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  gapsToEquipAllSchools: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  currentLabs: number;
}