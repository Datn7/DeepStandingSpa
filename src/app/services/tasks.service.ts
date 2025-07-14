import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal<string[]>([]);
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loadTasks() {
    this.http
      .get<string[]>(`${this.baseUrl}/tasks`)
      .subscribe((data) => this.tasks.set(data));
  }

  addTask(task: string) {
    this.http
      .post(`${this.baseUrl}/tasks`, task)
      .subscribe(() => this.loadTasks());
  }
}
