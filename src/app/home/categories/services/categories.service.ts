/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  async getCategories(): Promise<any> {
    return firstValueFrom(
      this.httpClient.get(
        'https://vp8919z4wa.execute-api.us-west-2.amazonaws.com/dev/category',
      ),
    );
  }

  async getAntiquies(): Promise<any> {
    return firstValueFrom(
      this.httpClient.get(
        'https://vp8919z4wa.execute-api.us-west-2.amazonaws.com/dev/antiquity',
      ),
    );
  }

  async getPlans(): Promise<any> {
    return firstValueFrom(
      this.httpClient.get(
        'https://vp8919z4wa.execute-api.us-west-2.amazonaws.com/dev/plan',
      ),
    );
  }
}
