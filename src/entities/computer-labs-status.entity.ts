import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('computer_labs_status')
export class ComputerLabsStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  labsNeeded: number;

  @Column('int')
  gapsToEquipAllSchools: number;

  @Column('int')
  currentLabs: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}