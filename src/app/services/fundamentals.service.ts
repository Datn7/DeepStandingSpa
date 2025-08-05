import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FundamentalsService {
  private baseUrl = 'https://localhost:5001/api/fundamentals';

  constructor(private http: HttpClient) {}

  getDataTypes() {
    return this.http.get(`${this.baseUrl}/data-types`);
  }

  getVariables() {
    return this.http.get(`${this.baseUrl}/variables`);
  }

  getOperators() {
    return this.http.get(`${this.baseUrl}/operators`);
  }
}
