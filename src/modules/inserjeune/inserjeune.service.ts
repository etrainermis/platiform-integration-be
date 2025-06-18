// src/career-portal-users/career-portal-users.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class InserjeuneService {
  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  async getUsers(): Promise<any> {
    const token = await this.authService.getDefaultCareerPortalToken();

    const url = 'https://api.tvetcareerportal.rtb.gov.rw/api/v1/auth/users/all-no-page';

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
