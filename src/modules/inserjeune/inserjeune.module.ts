// src/career-portal-users/career-portal-users.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from '../auth/auth.service';
import { InserjeuneController } from './inserjeune.controller';
import { InserjeuneService } from './inserjeune.service';

@Module({
  imports: [HttpModule],
  controllers: [InserjeuneController],
  providers: [InserjeuneService, AuthService],
})
export class InserjeuneModule {}
