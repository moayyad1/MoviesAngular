import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancialsComponent } from './financials/financials.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'Financials',component:FinancialsComponent},
  {path:'Payments',component:PaymentsComponent},
  {path:'Profile',component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }
