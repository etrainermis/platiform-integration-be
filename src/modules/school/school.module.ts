// src/school/school.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [HttpModule],
  controllers: [SchoolController],
  providers: [SchoolService, AuthService],
})
export class SchoolModule {}
