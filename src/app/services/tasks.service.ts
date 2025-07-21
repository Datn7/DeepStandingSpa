import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  addTask(task: Task) {
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }

  deleteTask(title: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tasks/${title}`);
  }

  updateTask(originalTitle: string, updatedTask: Task) {
    return this.http.put<Task>(
      `${this.baseUrl}/tasks/${originalTitle}`,
      updatedTask
    );
  }
}
