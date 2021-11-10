import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/main/Admin-Dashboard/admin/admin.component';
import { MoviesComponent } from 'src/app/main/Admin-Dashboard/movies/movies.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';

const routes: Routes = [
    //admin
    {path:'admin_dashboard',component:AdminComponent},
    {path:'user_profile',component:UserProfileComponent},
    {path:'movies_table',component:MoviesComponent},
    //end admin
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
