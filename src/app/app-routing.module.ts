import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './movies/moviedetails/moviedetails.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'movies',component:MoviesComponent},
{path:'movies/:movie/:location',component:MoviedetailsComponent},
{path:'bookingsummary',component:BookingSummaryComponent},
{path:'checkout',component:CheckoutComponent},

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
