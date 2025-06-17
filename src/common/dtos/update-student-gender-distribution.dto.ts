import { IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentGenderDistributionDto {
  @ApiProperty({ example: 5200, description: 'Number of male students' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  maleStudents: number;

  @ApiProperty({ example: 5800, description: 'Number of female students' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  femaleStudents: number;
}