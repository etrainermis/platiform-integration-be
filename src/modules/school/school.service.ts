// src/school/school.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SchoolService {
  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  async getSchools(): Promise<any> {
    const token = await this.authService.getDefaultAccessToken();

    const url = 'https://api.tvetmanagement.rtb.gov.rw/ETrainerBackend/api/v1/schools';

    const response = await firstValueFrom(
      this.httpService.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );

    return response.data;
  }
}
