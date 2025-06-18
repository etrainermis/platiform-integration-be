// src/tutorials/tutorials.controller.ts
import { Controller, Get, Patch, Body } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { Tutorials } from '../../entities/tutorials.entity';
import { UpdateTutorialsDto } from '../../common/dtos/update-tutorials.dto';

@Controller('tutorials')
export class TutorialsController {
  constructor(private readonly service: TutorialsService) {}

  @Get()
  getStatus(): Promise<Tutorials> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(@Body() dto: UpdateTutorialsDto): Promise<Tutorials> {
    return this.service.updateStatus(dto);
  }
}
