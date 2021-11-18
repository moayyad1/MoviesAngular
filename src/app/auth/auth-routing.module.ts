import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  {path:'LogIn',component:LoginComponent},
   {path:'',component:HomeComponent},
  {path:'singUP',component:SingUpPageComponent},
  {path:'forget-password',component:ForgetPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
