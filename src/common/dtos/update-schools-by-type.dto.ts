import { IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSchoolsByTypeDto {
  @ApiProperty({ example: 50, description: 'Number of private schools' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  privateSchools: number;

  @ApiProperty({ example: 120, description: 'Number of government-aided schools' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  governmentAidedSchools: number;

  @ApiProperty({ example: 80, description: 'Number of public schools' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  publicSchools: number;
}