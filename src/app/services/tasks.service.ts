import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal<string[]>([]);

  constructor(private http: HttpClient) {}

  loadTasks() {
    this.http
      .get<string[]>('https://localhost:port/api/tasks')
      .subscribe((data) => this.tasks.set(data));
  }

  addTask(task: string) {
    this.http
      .post('https://localhost:port/api/tasks', task)
      .subscribe(() => this.loadTasks());
  }
}
