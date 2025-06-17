// src/school-status/school-status.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PedagogyCertifiedService } from './pedagogy-certified.service';
import { PedagogyCertifiedController } from './pedagogy-certified.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  providers: [PedagogyCertifiedService],
  controllers: [PedagogyCertifiedController],
})
export class PedagogyCertifiedModule {}
