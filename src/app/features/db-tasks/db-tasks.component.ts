import { Component } from '@angular/core';
import { DbTaskService } from '../../services/dbTasks.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-db-tasks',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './db-tasks.component.html',
  styleUrl: './db-tasks.component.scss',
})
export class DbTasksComponent {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', priority: 'Normal' };
  editTask: Task | null = null;

  constructor(private taskService: DbTaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  createTask() {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.newTask = { id: 0, title: '', description: '', priority: 'Normal' };
      this.loadTasks();
    });
  }

  setEditTask(task: Task) {
    this.editTask = { ...task };
  }

  updateTask() {
    if (this.editTask) {
      this.taskService
        .updateTask(this.editTask.id, this.editTask)
        .subscribe(() => {
          this.editTask = null;
          this.loadTasks();
        });
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
