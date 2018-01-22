import { Component, OnInit } from '@angular/core';
import { LocationChangeService } from '../location-change.service';
import { MovieFetchService } from '../movie-fetch.service';
import { Movies } from './movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  location:string;
  movies:Movies[];
  moviesFiltered:Movies[];
  sortby:string;
  constructor(private locationSer:LocationChangeService,private moviesFetch:MovieFetchService,private router:Router) {
    this.sortby='select';
    this.location=sessionStorage.getItem('location');
    this.moviesFetch.getmovies().subscribe(res=>{this.movies=res;
    console.log(res);
    this.moviesFiltered=this.movies.filter((mov:Movies)=>mov.city.lastIndexOf(this.location)!=-1);
    console.error(this.moviesFiltered);
  });
//console.log('after subscribing movies, will subscribe location change');
    locationSer.locationChange.subscribe({
      next:(val)=>{
       console.log('in subscribe loc change');
       console.log(this.sortby);
        this.sortby='select';
        this.location=val;
        this.moviesFiltered=this.movies.filter((mov:Movies)=>mov.city.lastIndexOf(this.location)!=-1);
        console.error(this.moviesFiltered);
      }
    });
   }

  ngOnInit() {
   // console.log('inside init of movies comp');
    //if(this.movies)
    //this.moviesFiltered=this.movies.filter((mov:Movies)=>mov.city.lastIndexOf(this.location)!=-1);

  }

  sortbymethod(value:string){
    this.sortby=value;
    //console.log(this.moviesFiltered);
  //  let moviesFilterednew:Movies[];
    if(value=='name'){
      this.moviesFiltered=this.moviesFiltered.sort((a:Movies,b:Movies)=>{
        if(a.name>b.name)
        return 1;
        else if(a.name==b.name)
        return 0;
        else if(a.name<b.name)
        return -1;
      });
    }
    else if(value=='popularity'){
      this.moviesFiltered=this.moviesFiltered.sort((a:Movies,b:Movies)=>{
        if(a.rating<b.rating)
        return 1;
        else if(a.rating==b.rating)
        return 0;
        else if(a.rating>b.rating)
        return -1;
      });
    }
   // this.moviesFiltered=moviesFilterednew;
   // console.log('after sort:');
   // console.log(this.moviesFiltered);
  }

  bookTicket(index:number){
    this.router.navigate(['movies',this.moviesFiltered[index].name,this.location]);
  }
}
