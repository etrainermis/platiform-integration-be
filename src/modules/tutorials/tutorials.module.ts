// src/tutorials/tutorials.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutorials } from '../../entities/tutorials.entity';
import { TutorialsService } from './tutorials.service';
import { TutorialsController } from './tutorials.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tutorials])],
  providers: [TutorialsService],
  controllers: [TutorialsController],
})
export class TutorialsModule {}
