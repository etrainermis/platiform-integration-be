// src/survey/survey.controller.ts
import { Controller, Get } from '@nestjs/common';
import { SurveyService } from './survey.service';

@Controller('surveys')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  async fetchSurveys() {
    return await this.surveyService.getCompleteSurveysByUser();
  }
}
