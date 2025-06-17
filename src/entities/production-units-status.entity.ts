import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('production_units_status')
export class ProductionUnitsStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', name: 'operational_percentage' })
  operationalPercentage: number;

  @Column({ type: 'float', name: 'maintenance_percentage' })
  maintenancePercentage: number;

  @Column({ type: 'float', name: 'not_operational_percentage' })
  notOperationalPercentage: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}