import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { categoriesComponent } from './categories/categories.component';
import { newestmoviesComponent } from './newest-movies/newest-movies.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommentsComponent } from './comments/comments.component';
import { StarsComponent } from './stars/stars.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
@NgModule({
  declarations: [ 
    LandingComponent,
    categoriesComponent,
    newestmoviesComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TestimonialComponent,
    CarouselComponent,
    MovieDetailsComponent,
    CommentsComponent,
    StarsComponent,
    AllShowsComponent,
    TopRatedComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ] 
})
export class MainModule { }
