import { IsEnum, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StatType } from '../enums/EStattype.enum';

export class UpdateStatDto {
  @ApiProperty({ enum: StatType, description: 'Type of the statistic to update' })
  @IsEnum(StatType)
  type: StatType;

  @ApiProperty({ example: 45, minimum: 0, description: 'Current number of items' })
  @IsInt()
  @Min(0)
  currentNumber: number;

  @ApiProperty({ example: 4500, minimum: 0, description: 'Total number of items' })
  @IsInt()
  @Min(0)
  totalNumber: number;
}
