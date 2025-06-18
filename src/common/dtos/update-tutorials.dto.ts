// src/tutorials/dto/update-tutorials.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class UpdateTutorialsDto {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  numberOfTutorials: number;
}
