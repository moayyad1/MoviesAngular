import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { UploadMovieComponent } from './upload-movie/upload-movie.component';
import { SharedModule } from '../shared/shared.module';
import { AccountantComponent } from './accountant/accountant.component';
import { UploadeAccountantComponent } from './uploade-accountant/uploade-accountant.component';
import { UpdateAccountantComponent } from './update-accountant/update-accountant.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    UpdateComponent,
    AdminMoviesComponent,
    AdminSideBarComponent,
    UploadMovieComponent,
    AccountantComponent,
    UploadeAccountantComponent,
    UpdateAccountantComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
