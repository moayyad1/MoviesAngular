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
import { PaymentsComponent } from './payments/payments.component';
import { NgxPrintModule} from 'ngx-print';
import { FinancialsComponent } from './financials/financials.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { UsersComponent } from './users/users.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DashboardComponent, 
    UpdateComponent,
    AdminMoviesComponent,
    AdminSideBarComponent,
    UploadMovieComponent,
    AccountantComponent,
    UploadeAccountantComponent,
    UpdateAccountantComponent,
    FinancialsComponent,
    PaymentsComponent,
    UpdateMovieComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgxPrintModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
