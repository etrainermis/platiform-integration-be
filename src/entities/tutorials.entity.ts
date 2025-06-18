// src/tutorials/entities/tutorials.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tutorials')
export class Tutorials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  numberOfTutorials: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
