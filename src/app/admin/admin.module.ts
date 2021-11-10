import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    UpdateComponent,
    AdminMoviesComponent,
    AdminSideBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
