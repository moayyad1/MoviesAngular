import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/Guards/auth-guard.guard';
import { AdminModuleModule } from './Admin/admin-module/admin-module.module';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path:'movies',loadChildren:()=>MainModule,canActivate:[AuthGuardGuard],
    
  },
  {
    path:'Admin',loadChildren:()=>AdminModuleModule
  },
  {
    path:'',loadChildren:()=>AuthModule
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
