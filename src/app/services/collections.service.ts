import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  private apiUrl = 'https://localhost:5001/api/collections';

  constructor(private http: HttpClient) {}

  getList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/list`);
  }

  getDictionary(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(
      `${this.apiUrl}/dictionary`
    );
  }

  getQueue(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/queue`);
  }

  getStack(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/stack`);
  }

  getHashSet(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/hashset`);
  }
}
