import { Column } from 'typeorm';

export class PerformanceMetric {
  @Column('int')
  enrollment: number;

  @Column('int')
  graduation: number;

  @Column('float')
  performance: number;

  @Column('float')
  attendance: number;

  @Column('float')
  participation: number;
}