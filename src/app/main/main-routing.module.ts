import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { newestmoviesComponent } from './newest-movies/newest-movies.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'newest_movies',component:newestmoviesComponent},
  {path:'about',component:AboutComponent},
  {path:'movie-details',component:MovieDetailsComponent},
  {path:'contact',component:ContactComponent},
  {path:'all_shows',component:AllShowsComponent},
  {path:'top_rated',component:TopRatedComponent},
  // {path:'user_profile',component:AccountSettingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
