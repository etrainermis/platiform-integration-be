import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { SchoolConnectivityService } from './school-connectivity.service';
import { UpdateSchoolConnectivityDto } from '../../common/dtos/update-school-connectivity.dto';
import { SchoolConnectivity } from '../../entities/school-connectivity.entity';

@Controller('school-connectivity')
export class SchoolConnectivityController {
  constructor(private readonly service: SchoolConnectivityService) {}

  @Get()
  getStatus(): Promise<SchoolConnectivity> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(@Body() updateDto: UpdateSchoolConnectivityDto): Promise<SchoolConnectivity> {
    return this.service.updateStatus(updateDto);
  }
}