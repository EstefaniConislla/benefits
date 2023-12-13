/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  async getCategories(): Promise<any> {
    return firstValueFrom(this.httpClient.get(enviroment.categories));
  }

  async getAntiques(): Promise<any> {
    return firstValueFrom(this.httpClient.get(enviroment.antiques));
  }

  async getPlans(): Promise<any> {
    return firstValueFrom(this.httpClient.get(enviroment.plan));
  }

  async getBeneficiaryTypes(): Promise<any> {
    return firstValueFrom(this.httpClient.get(enviroment.beneficiaryTypes));
  }
}
