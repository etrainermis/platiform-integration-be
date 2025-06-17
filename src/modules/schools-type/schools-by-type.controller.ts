import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { SchoolsByTypeService } from './schools-by-type.service';
import { UpdateSchoolsByTypeDto } from '../../common/dtos/update-schools-by-type.dto';
import { SchoolsByType } from '../../entities/schools-by-type.entity';

@Controller('schools-by-type')
export class SchoolsByTypeController {
  constructor(private readonly service: SchoolsByTypeService) {}

  @Get()
  getStatus(): Promise<SchoolsByType> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(@Body() updateDto: UpdateSchoolsByTypeDto): Promise<SchoolsByType> {
    return this.service.updateStatus(updateDto);
  }
}