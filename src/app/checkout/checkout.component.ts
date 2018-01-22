import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  amount:number;
  constructor(private bookingservice:BookingserviceService) {
    if(bookingservice.theatre)
    this.amount=this.bookingservice.theatre.price;
   }

  ngOnInit() {
  }

}
