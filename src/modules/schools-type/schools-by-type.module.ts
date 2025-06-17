import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolsByType } from '../../entities/schools-by-type.entity';
import { SchoolsByTypeService } from './schools-by-type.service';
import { SchoolsByTypeController } from './schools-by-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolsByType])],
  controllers: [SchoolsByTypeController],
  providers: [SchoolsByTypeService],
})
export class SchoolsByTypeModule {}