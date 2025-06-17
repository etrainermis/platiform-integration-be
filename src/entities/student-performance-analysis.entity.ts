// src/student-performance-analysis/entities/student-performance-analysis.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { PerformanceMetric } from './performance-metric.entity';

@Entity('student_performance_analysis')
export class StudentPerformanceAnalysis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(() => PerformanceMetric)
  girls: PerformanceMetric;

  @Column(() => PerformanceMetric)
  boys: PerformanceMetric;

  @Column('int', { default: 0 })
  totalGirls: number;

  @Column('int', { default: 0 })
  totalBoys: number;


  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
