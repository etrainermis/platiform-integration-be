import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('schools_by_type')
export class SchoolsByType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', name: 'private_schools' })
  privateSchools: number;

  @Column({ type: 'int', name: 'government_aided_schools' })
  governmentAidedSchools: number;

  @Column({ type: 'int', name: 'public_schools' })
  publicSchools: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}