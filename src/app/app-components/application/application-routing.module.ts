import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ApplicationRouterActivate } from './application-router-activate';

const routes: Routes = [
  {
    path: '',
    canActivate : [ApplicationRouterActivate],
    component: ApplicationComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
