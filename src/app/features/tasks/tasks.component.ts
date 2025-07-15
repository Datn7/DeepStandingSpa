import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TasksService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['Normal'],
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value as Task;
      this.taskService.addTask(task).subscribe(() => {
        this.loadTasks();
        this.taskForm.reset({ priority: 'Normal' });
      });
    }
  }
}
