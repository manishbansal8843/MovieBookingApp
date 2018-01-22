import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { SelectedTheater } from '../movies/moviedetails/selectedtheater';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  theater:SelectedTheater;
  constructor(private router:Router,private bookingSummary:BookingserviceService) {
    this.theater=bookingSummary.theatre;
   }

  ngOnInit() {
  }
  booktickets(){
    this.router.navigate(['movies']);
  }
  modifybooking(){
    this.router.navigate(['movies',this.theater.movieName,this.theater.location]);
  }
  confirmbooking(){
    this.router.navigate(['checkout']);

  }
}
