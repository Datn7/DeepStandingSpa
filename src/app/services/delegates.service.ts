import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DelegatesService {
  private apiUrl = 'https://localhost:5001/api/delegates';

  constructor(private http: HttpClient) {}

  runAction(): Observable<string> {
    return this.http.get(`${this.apiUrl}/action`, { responseType: 'text' });
  }

  runFunc(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/func`);
  }

  runPredicate(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/predicate`);
  }

  runDelegate(): Observable<string> {
    return this.http.get(`${this.apiUrl}/delegate`, { responseType: 'text' });
  }

  runEvent(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/event`);
  }
}
