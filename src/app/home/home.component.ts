import { Component, OnInit } from '@angular/core';
import { LocationChangeService } from '../location-change.service';
import { EventEmitter } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location:string;
  constructor(private locChange:LocationChangeService) {
    this.eventEmitter=locChange.locationChange;
    this.location=sessionStorage.getItem('location');
    if(!this.location)
    this.location='select';
   }
  eventEmitter:EventEmitter<string>=new EventEmitter();
  ngOnInit() {
  }
  locationChange(event){
    sessionStorage.setItem('location',event.target.value);
    this.eventEmitter.emit(event.target.value);
    
  }
}
