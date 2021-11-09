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
import { HorrorCategoryComponent } from './specific-category/horror-category/horror-category.component';
import { ActionCategoryComponent } from './specific-category/action-category/action-category.component';
import { ComedyCategoryComponent } from './specific-category/comedy-category/comedy-category.component';
import { DramaCategoryComponent } from './specific-category/drama-category/drama-category.component';
import { FantasyCategoryComponent } from './specific-category/fantasy-category/fantasy-category.component';
import { MysteryCategoryComponent } from './specific-category/mystery-category/mystery-category.component';
import { RomanceCategoryComponent } from './specific-category/romance-category/romance-category.component';
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
    UserProfileComponent,
    HorrorCategoryComponent,
    ActionCategoryComponent,
    ComedyCategoryComponent,
    DramaCategoryComponent,
    FantasyCategoryComponent,
    MysteryCategoryComponent,
    RomanceCategoryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ] 
})
export class MainModule { }
