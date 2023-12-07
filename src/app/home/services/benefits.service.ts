import { Injectable } from '@angular/core';
import { Benefits } from '../models/benefts.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BenefitsService {
  constructor(private httpClient: HttpClient) {}

  /*getBenefits(): Benefits[] {
    // Simula una operación asincrónica, por ejemplo, obtener datos de una API
    return this.benefits;
  }*/

  async getBenefits(): Promise<Benefits[]> {
    return firstValueFrom<Benefits[]>(
      this.httpClient.get<Benefits[]>(
        'https://vp8919z4wa.execute-api.us-west-2.amazonaws.com/dev/benefit',
      ),
    );
  }
}
