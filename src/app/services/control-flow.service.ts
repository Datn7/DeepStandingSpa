import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ControlFlowExample } from '../models/control-flow.model';

@Injectable({
  providedIn: 'root',
})
export class ControlFlowService {
  private apiUrl = 'https://localhost:5001/api/controlflow';

  constructor(private http: HttpClient) {}

  getConditionals(): Observable<ControlFlowExample[]> {
    return this.http.get<ControlFlowExample[]>(`${this.apiUrl}/conditionals`);
  }

  getLoops(): Observable<ControlFlowExample[]> {
    return this.http.get<ControlFlowExample[]>(`${this.apiUrl}/loops`);
  }

  getArrays(): Observable<ControlFlowExample[]> {
    return this.http.get<ControlFlowExample[]>(`${this.apiUrl}/arrays`);
  }

  getMethods(): Observable<ControlFlowExample[]> {
    return this.http.get<ControlFlowExample[]>(`${this.apiUrl}/methods`);
  }

  getStrings(): Observable<ControlFlowExample[]> {
    return this.http.get<ControlFlowExample[]>(`${this.apiUrl}/strings`);
  }

  getComments(): Observable<ControlFlowExample[]> {
    return this.http.get<ControlFlowExample[]>(`${this.apiUrl}/comments`);
  }
}
