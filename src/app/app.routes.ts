import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-policy', component: PolicyFormComponent },
  { path: 'edit-policy/:id', component: PolicyFormComponent }
];
