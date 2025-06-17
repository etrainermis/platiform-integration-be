import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('internet_connectivity_trend')
export class InternetConnectivityTrend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  trendData: {
    month: string;
    connectedSchoolsPercentage: number;
    targetPercentage: number;
  }[];

  @Column('float')
  startingPointPercentage: number;

  @Column('float')
  currentPercentage: number;

  @Column('float')
  growthPercentage: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}