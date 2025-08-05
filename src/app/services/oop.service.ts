import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OopExample } from '../models/oop.model';

@Injectable({
  providedIn: 'root',
})
export class OopService {
  private apiUrl = 'https://localhost:5001/api/oop';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/classes`);
  }

  getEncapsulation(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/encapsulation`);
  }

  getInheritance(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/inheritance`);
  }

  getPolymorphism(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/polymorphism`);
  }

  getAbstraction(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/abstraction`);
  }

  getInterfaces(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/interfaces`);
  }

  getEnums(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/enums`);
  }

  getStructs(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/structs`);
  }

  getStatic(): Observable<OopExample[]> {
    return this.http.get<OopExample[]>(`${this.apiUrl}/static`);
  }
}
