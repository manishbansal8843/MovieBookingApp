import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { MoviesComponent } from './movies/movies.component';
import { HttpModule } from '@angular/http';
import { LocationChangeService } from './location-change.service';
import { MovieFetchService } from './movie-fetch.service';
import { RatingComponent } from './movies/rating/rating.component';
import { RepeatDirective } from './movies/rating/repeat.directive';
import { MovieBoxFocusDirective } from './movies/movie-box-focus.directive';
import { RecommendedDirective } from './movies/recommended.directive';
import { MoviedetailsComponent } from './movies/moviedetails/moviedetails.component';
import { TheaterFetchService } from './theater-fetch.service';
import { BookingserviceService } from './bookingservice.service';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    MoviesComponent,
    RatingComponent,
    RepeatDirective,
    MovieBoxFocusDirective,
    RecommendedDirective,
    MoviedetailsComponent,
    BookingSummaryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpModule
  ],
  providers: [LoginService,LocationChangeService, MovieFetchService,TheaterFetchService, BookingserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
