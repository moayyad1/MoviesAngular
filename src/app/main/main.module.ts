import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { TrendingComponent } from './trending/trending.component';
import { BestRatingComponent } from './best-rating/best-rating.component';
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
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommentsComponent } from './comments/comments.component';
import { StarsComponent } from './stars/stars.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
@NgModule({
  declarations: [ 
    LandingComponent,
    UpcomingComponent,
    SuggestedComponent,
    TrendingComponent,
    BestRatingComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TestimonialComponent,
    CarouselComponent,
    OwlCarouselComponent,
    MovieDetailsComponent,
    CommentsComponent,
    StarsComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class MainModule { }
