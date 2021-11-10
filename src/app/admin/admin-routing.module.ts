import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';


import { DashboardComponent } from './dashboard/dashboard.component';

import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'test',component:AdminMoviesComponent},
  {path:'AdminUpdate',component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
