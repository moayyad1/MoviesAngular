import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BestRatingComponent } from './best-rating/best-rating.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'best',component:BestRatingComponent},
  {path:'about',component:AboutComponent},
  {path:'movie-details',component:MovieDetailsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
