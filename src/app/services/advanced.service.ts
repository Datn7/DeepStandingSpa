import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdvancedModel } from '../models/advanced.model';

@Injectable({
  providedIn: 'root',
})
export class AdvancedService {
  private apiUrl = 'https://localhost:5001/api/advanced';

  constructor(private http: HttpClient) {}

  getExample(topic: string): Observable<AdvancedModel> {
    return this.http.get<AdvancedModel>(`${this.apiUrl}/${topic}`);
  }
}
