import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import {ToastrModule, ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';
=======

>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot()
=======
    HttpClientModule
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
