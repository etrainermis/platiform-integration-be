import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { InternetConnectivityTrend } from './internet-connectivity-trend.entity';
import { Month } from 'src/common/enums/Emonth.enum';


@Entity()
export class TrendMonth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Month })
  month: Month;

  @Column('float')
  connectedSchoolsPercentage: number;

  @Column('float')
  targetPercentage: number;

  @ManyToOne(() => InternetConnectivityTrend, (trend) => trend.trendData, { onDelete: 'CASCADE' })
  trend: InternetConnectivityTrend;

  @CreateDateColumn()
  createdAt: Date;
}
