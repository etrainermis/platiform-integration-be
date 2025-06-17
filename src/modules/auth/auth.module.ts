// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';

@Module({
  imports: [HttpModule],
  providers: [AuthService],
  exports: [AuthService], // Export so other modules like SchoolStatusModule can use it
})
export class AuthModule {}
