import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { HomeComponent } from './features/home/home.component';
import { DbTasksComponent } from './features/db-tasks/db-tasks.component';
import { DiDemoComponent } from './features/di-demo/di-demo.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ProfileComponent } from './features/auth/profile/profile.component';
import { BasicsComponent } from './features/basics/basics.component';
import { OopComponent } from './features/oop/oop.component';
import { CollectionsComponent } from './features/collections/collections.component';
import { DelegatesComponent } from './features/delegates/delegates.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'db-tasks', component: DbTasksComponent },
  { path: 'di-demo', component: DiDemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'oop', component: OopComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'delegates', component: DelegatesComponent },
];
