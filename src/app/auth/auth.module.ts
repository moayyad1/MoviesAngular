import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
import {ToastrModule, ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    SingUpPageComponent,
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot()
  ]
})
export class AuthModule { }
