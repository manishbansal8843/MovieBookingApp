import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MovieFetchService } from '../../movie-fetch.service';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Movies } from '../movies';
import { Theater } from './theater';
import { TheaterFetchService } from '../../theater-fetch.service';
import { LocationChangeService } from '../../location-change.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { SelectedTheater } from './selectedtheater';
import { BookingserviceService } from '../../bookingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit,OnDestroy {
  movie$:Movies;
  movieOnLoad:Movies;
  theater$:Theater[];
  selectedTheater:Theater;
  movieFetchSer1:Subscription;
  sTheater:SelectedTheater=new SelectedTheater();
  location:string;
 // movieFetchSer2:Subscription;
  TheaterFetchSer1:Subscription;
  TheaterFetchSer2:Subscription;

  constructor(private router:Router,private bokingService:BookingserviceService ,private activatedRoute:ActivatedRoute,private moviefetch:MovieFetchService,private theaterFetch:TheaterFetchService,private locationSer:LocationChangeService) { 
    locationSer.locationChange.subscribe({
      next:(val)=>{
        this.fetchTheaters(val);
        this.location=val;
      }
    });
    console.log(bokingService.theatre);
    if(bokingService.theatre){
    this.sTheater=bokingService.theatre;
    }
  }

  ngOnInit() {
    this.movieFetchSer1= this.activatedRoute.paramMap.switchMap((params:ParamMap)=>{
      return this.moviefetch.getmovie(params.get('movie'));
      
    }).subscribe((movie:Movies)=>{
      this.movie$=movie;
      this.movieOnLoad=movie;
    });
   this.TheaterFetchSer1= this.activatedRoute.paramMap.switchMap((params:ParamMap)=>{
    this.location=params.get('location');

      return this.theaterFetch.fetchTheaters(params.get('location'));
    }).subscribe((res:Theater[])=>{
        this.theater$=res;
        if(this.bokingService.theatre){
        this.selectedTheater=this.theater$.filter((theater:Theater)=>theater.name==this.bokingService.theatre.name)[0];
        }
      });

    
  }
  ngOnDestroy(){
    this.movieFetchSer1.unsubscribe();
   // this.movieFetchSer2.unsubscribe();
    this.TheaterFetchSer1.unsubscribe();
    if(this.TheaterFetchSer2)
    this.TheaterFetchSer2.unsubscribe();

  }
  fetchTheaters(loc:string){
    this.TheaterFetchSer2=this.theaterFetch.fetchTheaters(loc).subscribe((res:Theater[])=>{this.theater$=res;});
    this.selectedTheater=undefined;
    /*this.movieFetchSer2=this.moviefetch.getmovie(this.movie$.name).subscribe((movie:Movies)=>{
      if(movie.name!=this.movie$.name){
        this.movie$=undefined;
      }
    });*/
    if(!this.movieOnLoad.city.filter((location:string)=>location==loc)[0]){
      this.movie$=undefined;
    }
    else{
      this.movie$=this.movieOnLoad;
    }
  }

  selectTheater(theaterName:string){
this.selectedTheater=this.theater$.filter((theater:Theater)=>theater.name==theaterName)[0];
this.sTheater=new SelectedTheater();

  }

  thformSubmit(){
    this.sTheater.price=this.selectedTheater.price*(this.sTheater.seats);
    this.sTheater.location=this.location;
    this.sTheater.movieName=this.movie$.name;
    this.sTheater.name=this.selectedTheater.name;
    console.log(this.sTheater);
    this.bokingService.theatre=this.sTheater;

    this.router.navigate(['bookingsummary']);
  }

}
