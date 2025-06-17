// src/school-status/school-status.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PedagogyCertifiedService {
  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  async getCertifiedSchools(limit = 100, page = 0): Promise<any> {
    const token = await this.authService.getDefaultAccessToken();

    const pedagogicalStatus = 'CERTIFIED';
    const url = `https://api.tvetmanagement.rtb.gov.rw/ETrainerBackend/api/v1/schools/all/by-pedagogical-status/${pedagogicalStatus}`;

    const response = await firstValueFrom(
      this.httpService.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        params: {
          limit,
          page,
        },
      }),
    );

    return response.data;
  }
}
