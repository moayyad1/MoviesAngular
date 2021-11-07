import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'singUP',component:SingUpPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
