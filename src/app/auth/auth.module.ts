import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
<<<<<<< HEAD
import {ToastrModule, ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';
=======
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945


@NgModule({
  declarations: [
    LoginComponent,
    SingUpPageComponent,
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
<<<<<<< HEAD
    SharedModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot()
=======
    SharedModule
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
  ]
})
export class AuthModule { }
