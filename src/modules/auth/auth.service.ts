// src/auth/auth.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async getAccessToken(email: string, password: string): Promise<string> {
    const url = 'https://api.tvetmanagement.rtb.gov.rw/ETrainerBackend/api/v1/auth/signin';

    const body = { email, password };

    try {
      const response = await firstValueFrom(this.httpService.post(url, body));
      return response.data.data.accessToken;
    } catch (error) {
      console.error('Authentication failed:', error.response?.data || error.message);
      throw error;
    }
  }

  // Optional: helper method for default credentials
  async getDefaultAccessToken(): Promise<string> {
    return this.getAccessToken('andesanselme@gmail.com', 'Etrainer!132');
  }

    async getCareerPortalAccessToken(email: string, password: string): Promise<string> {
    const url = 'https://api.tvetcareerportal.rtb.gov.rw/api/v1/auth/login';
    const body = { email, password };

    try {
      const response = await firstValueFrom(this.httpService.post(url, body));
      return response.data.data.token; // Confirm this field name matches the API response
    } catch (error) {
      console.error('Career Portal Authentication failed:', error.response?.data || error.message);
      throw error;
    }
  }

  async getDefaultCareerPortalToken(): Promise<string> {
    return this.getCareerPortalAccessToken('divineingabire69@gmail.com', 'Random@123');
  }
}
