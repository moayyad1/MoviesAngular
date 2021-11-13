import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule, ToastNoAnimationModule} from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VgCoreModule, } from '@videogular/ngx-videogular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    VgCoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
