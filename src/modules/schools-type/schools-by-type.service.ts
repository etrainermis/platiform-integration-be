import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSchoolsByTypeDto } from '../../common/dtos/update-schools-by-type.dto';
import { SchoolsByType } from '../../entities/schools-by-type.entity';

@Injectable()
export class SchoolsByTypeService {
  constructor(
    @InjectRepository(SchoolsByType)
    private readonly schoolsByTypeRepository: Repository<SchoolsByType>,
  ) {}

  async getStatus(): Promise<SchoolsByType> {
    let status = await this.schoolsByTypeRepository.findOne({ where: {} });
    if (!status) {
      status = this.schoolsByTypeRepository.create({
        privateSchools: 0,
        governmentAidedSchools: 0,
        publicSchools: 0,
      });
      await this.schoolsByTypeRepository.save(status);
    }
    return status;
  }

  async updateStatus(updateDto: UpdateSchoolsByTypeDto): Promise<SchoolsByType> {
    let status = await this.schoolsByTypeRepository.findOne({ where: {} });
    if (!status) {
      status = this.schoolsByTypeRepository.create(updateDto);
    } else {
      status.privateSchools = updateDto.privateSchools;
      status.governmentAidedSchools = updateDto.governmentAidedSchools;
      status.publicSchools = updateDto.publicSchools;
    }
    return this.schoolsByTypeRepository.save(status);
  }
}