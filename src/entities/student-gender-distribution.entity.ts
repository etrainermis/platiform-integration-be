import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('student_gender_distribution')
export class StudentGenderDistribution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', name: 'total_students' })
  totalStudents: number;

  @Column({ type: 'int', name: 'male_students' })
  maleStudents: number;

  @Column({ type: 'int', name: 'female_students' })
  femaleStudents: number;

  @Column({ type: 'float', name: 'male_percentage' })
  malePercentage: number;

  @Column({ type: 'float', name: 'female_percentage' })
  femalePercentage: number;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}