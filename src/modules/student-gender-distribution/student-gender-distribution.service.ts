import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentGenderDistribution } from '../../entities/student-gender-distribution.entity';
import { UpdateStudentGenderDistributionDto } from '../../common/dtos/update-student-gender-distribution.dto';

@Injectable()
export class StudentGenderDistributionService {
  constructor(
    @InjectRepository(StudentGenderDistribution)
    private readonly repo: Repository<StudentGenderDistribution>,
  ) {}

  async getStatus(): Promise<StudentGenderDistribution> {
    let status = await this.repo.findOne({ where: {} });
    if (!status) {
      status = this.repo.create({
        maleStudents: 0,
        femaleStudents: 0,
        totalStudents: 0,
        malePercentage: 0,
        femalePercentage: 0,
      });
      await this.repo.save(status);
    }
    return status;
  }

  async updateStatus(updateDto: UpdateStudentGenderDistributionDto): Promise<StudentGenderDistribution> {
    const total = updateDto.maleStudents + updateDto.femaleStudents;
    const malePercentage = total ? (updateDto.maleStudents / total) * 100 : 0;
    const femalePercentage = total ? (updateDto.femaleStudents / total) * 100 : 0;

    let status = await this.repo.findOne({ where: {} });
    if (!status) {
      status = this.repo.create({
        maleStudents: updateDto.maleStudents,
        femaleStudents: updateDto.femaleStudents,
        totalStudents: total,
        malePercentage,
        femalePercentage,
      });
    } else {
      status.maleStudents = updateDto.maleStudents;
      status.femaleStudents = updateDto.femaleStudents;
      status.totalStudents = total;
      status.malePercentage = malePercentage;
      status.femalePercentage = femalePercentage;
    }
    return this.repo.save(status);
  }
}