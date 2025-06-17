// src/stats/stat.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stats')
export class Stat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  type: string;

  @Column({ default: 0 })
  currentNumber: number;

  @Column({ default: 0 })
  totalNumber: number;
}
