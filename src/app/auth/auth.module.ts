import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
import {ToastrModule, ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    LoginComponent,
    SingUpPageComponent,
    HomeComponent,
    NavBarComponent
      
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class AuthModule { }
