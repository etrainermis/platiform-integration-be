import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workshop_status')
export class WorkshopStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  available: number;

  @Column({ type: 'int', name: 'still_needed' })
  stillNeeded: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}