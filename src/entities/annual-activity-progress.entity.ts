import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('annual_activity_progress')
export class AnnualActivityProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  planningCompletedPercentage: number;

  @Column('float')
  implementationCompletedPercentage: number;

  @Column('float')
  monitoringCompletedPercentage: number;

  @Column('float')
  evaluationCompletedPercentage: number;

  @Column('float')
  reportingCompletedPercentage: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
