import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { AccountantSidBarComponent } from './accountant-sid-bar/accountant-sid-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancialsComponent } from './financials/financials.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccountantSidBarComponent,
    DashboardComponent,
    FinancialsComponent,
    PaymentsComponent,
    ProfileComponent
    
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule,
    SharedModule
  ]
})
export class AccountantModule { }
