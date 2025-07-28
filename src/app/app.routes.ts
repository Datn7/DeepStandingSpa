import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { HomeComponent } from './features/home/home.component';
import { DbTasksComponent } from './features/db-tasks/db-tasks.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'db-tasks', component: DbTasksComponent },
];
