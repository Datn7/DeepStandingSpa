import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { HomeComponent } from './features/home/home.component';
import { DbTasksComponent } from './features/db-tasks/db-tasks.component';
import { DiDemoComponent } from './features/di-demo/di-demo.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'db-tasks', component: DbTasksComponent },
  { path: 'di-demo', component: DiDemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
