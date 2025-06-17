// src/survey/survey.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { AuthService } from '../auth/auth.service'; // reused

@Module({
  imports: [HttpModule],
  controllers: [SurveyController],
  providers: [SurveyService, AuthService],
})
export class SurveyModule {}
