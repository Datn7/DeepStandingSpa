import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShapeInfo } from '../models/shapeInfo.model';

@Injectable({
  providedIn: 'root',
})
export class OopService {
  private apiUrl = 'https://localhost:5001/api/oop'; // Adjust port if needed

  constructor(private http: HttpClient) {}

  getShapes(): Observable<ShapeInfo[]> {
    return this.http.get<ShapeInfo[]>(`${this.apiUrl}/shapes`);
  }
}
