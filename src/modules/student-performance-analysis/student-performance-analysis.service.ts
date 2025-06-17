import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentPerformanceAnalysis } from '../../entities/student-performance-analysis.entity';
import { UpdateStudentPerformanceAnalysisDto } from '../../common/dtos/update-student-performance-analysis.dto';
import { PerformanceMetricDto } from 'src/common/dtos/performance-metric.dto';

@Injectable()
export class StudentPerformanceAnalysisService {
  constructor(
    @InjectRepository(StudentPerformanceAnalysis)
    private repo: Repository<StudentPerformanceAnalysis>,
  ) {}

  async getStatus(): Promise<StudentPerformanceAnalysis> {
    let record = await this.repo.findOne({ where: {} });

    if (!record) {
      record = this.repo.create({
        girls: {
          enrollment: 0,
          graduation: 0,
          performance: 0,
          attendance: 0,
          participation: 0,
        },
        boys: {
          enrollment: 0,
          graduation: 0,
          performance: 0,
          attendance: 0,
          participation: 0,
        },
        totalGirls: 0,
        totalBoys: 0,
      });
      await this.repo.save(record);
    }

    return record;
  }
async updateStatus(dto: UpdateStudentPerformanceAnalysisDto): Promise<StudentPerformanceAnalysis> {
  let record = await this.repo.findOne({ where: {} });

  const calculateTotal = (data: PerformanceMetricDto): number => {
    return (
      data.enrollment +
      data.graduation +
      data.performance +
      data.attendance +
      data.participation
    );
  };

  if (!record) {
    record = this.repo.create({
      girls: dto.girls,
      boys: dto.boys,
      totalGirls: calculateTotal(dto.girls),
      totalBoys: calculateTotal(dto.boys),
    });
  } else {
    record.girls = dto.girls;
    record.boys = dto.boys;
    record.totalGirls = calculateTotal(dto.girls);
    record.totalBoys = calculateTotal(dto.boys);
  }

  return this.repo.save(record);
}

}
