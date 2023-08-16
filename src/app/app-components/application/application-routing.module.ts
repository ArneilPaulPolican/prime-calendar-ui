import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ApplicationRouterActivate } from './application-router-activate';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivate : [ApplicationRouterActivate],
    component: ApplicationComponent,
    children: [
      {path: '', canActivate: [ApplicationRouterActivate], component: DashboardComponent},
      {path: 'dashboard', canActivate: [ApplicationRouterActivate], component: DashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
