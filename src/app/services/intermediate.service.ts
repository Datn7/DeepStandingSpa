import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntermediateExample } from '../models/intermediate.model';

@Injectable({
  providedIn: 'root',
})
export class IntermediateService {
  private apiUrl = 'https://localhost:5001/api/intermediate';

  constructor(private http: HttpClient) {}

  getExceptions(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/exceptions`);
  }

  getGenerics(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/generics`);
  }

  getCollections(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/collections`);
  }

  getDelegates(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/delegates`);
  }

  getEvents(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/events`);
  }

  getLinq(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/linq`);
  }

  getFileIO(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/fileio`);
  }

  getAsync(): Observable<IntermediateExample[]> {
    return this.http.get<IntermediateExample[]>(`${this.apiUrl}/async`);
  }
}
