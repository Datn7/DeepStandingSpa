import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiResult } from '../models/di-result.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DiTestService {
  private apiUrl = 'https://localhost:5001/api/ditest';

  constructor(private http: HttpClient) {}

  getDiValues(): Observable<DiResult> {
    return this.http.get<DiResult>(this.apiUrl);
  }
}
