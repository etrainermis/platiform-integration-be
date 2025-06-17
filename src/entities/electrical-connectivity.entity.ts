// src/electrical-connectivity/entities/electrical-connectivity.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('electrical_connectivity')
export class ElectricalConnectivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  totalCoveragePercentage: number;

  @Column('float')
  solarPercentage: number;

  @Column('float')
  gridPercentage: number;

  @Column('float')
  renewablePercentage: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
