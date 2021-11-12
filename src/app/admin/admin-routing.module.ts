import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AccountantComponent } from './accountant/accountant.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'AdminMovies',component:AdminMoviesComponent},
  {path:'AdminUpdate',component:UpdateComponent},
  {path:'AdminAccountant',component:AccountantComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes),MatDialogModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
