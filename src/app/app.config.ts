import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormsModule

import { appRoutes } from './app.routes'; // Routing configuration
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Routes
    ReactiveFormsModule, // Added for reactive forms (formGroup, formControl)
    FormsModule, // Optional, for template-driven forms
    AppComponent, // Standalone components
    DashboardComponent,
    PolicyFormComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent] // Root component to bootstrap
})
export class AppConfig {}
