import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ControlFlowService {
  private baseUrl = 'https://localhost:5001/api/controlflow';

  constructor(private http: HttpClient) {}

  getConditionals() {
    return this.http.get<string[]>(`${this.baseUrl}/conditionals`);
  }

  getLoops() {
    return this.http.get<string[]>(`${this.baseUrl}/loops`);
  }

  getArrays() {
    return this.http.get<string[]>(`${this.baseUrl}/arrays`);
  }

  getMethods() {
    return this.http.get<string[]>(`${this.baseUrl}/methods`);
  }

  getStrings() {
    return this.http.get<string[]>(`${this.baseUrl}/strings`);
  }

  getComments() {
    return this.http.get<string[]>(`${this.baseUrl}/comments`);
  }
}
