import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['Normal'],
    });
  }

  loadTasks(): void {
    this.tasksService.getTasks().subscribe({
      next: (data) => (this.tasks = data),
      error: (err) => console.error('Failed to load tasks', err),
    });
  }

  addTask(): void {
    if (this.taskForm.invalid) return;

    const task = this.taskForm.value;

    this.tasksService.addTask(task).subscribe({
      next: () => {
        this.loadTasks(); // refresh list
        this.taskForm.reset({ priority: 'Normal' }); // reset form
      },
      error: (err) => console.error('Add task failed', err),
    });
  }

  deleteTask(title: string): void {
    this.tasksService.deleteTask(title).subscribe({
      next: () => this.loadTasks(), // Refresh list
      error: (err) => console.error('Delete failed', err),
    });
  }
}
