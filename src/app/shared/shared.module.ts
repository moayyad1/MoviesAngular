import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
<<<<<<< HEAD
import {MatProgressSpinnerModule} from'@angular/material/progress-spinner';
=======

>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgbModule,
    SlickCarouselModule,
    VgCoreModule,
    HttpClientModule,
<<<<<<< HEAD
    YouTubePlayerModule,
    MatProgressSpinnerModule
=======
    YouTubePlayerModule
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
   ],
   exports:[
     FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgbModule,
    SlickCarouselModule,
    VgCoreModule,
    HttpClientModule,
<<<<<<< HEAD
    YouTubePlayerModule,
    MatProgressSpinnerModule
=======
    YouTubePlayerModule
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
   ],
   providers: [HttpClient]

})
export class SharedModule { }
