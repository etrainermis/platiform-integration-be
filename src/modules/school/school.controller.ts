// src/school/school.controller.ts
import { Controller, Get } from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get()
  async getAllSchools() {
    return await this.schoolService.getSchools();
  }
}
