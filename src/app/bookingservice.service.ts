import { Injectable } from '@angular/core';
import { SelectedTheater } from './movies/moviedetails/selectedtheater';

@Injectable()
export class BookingserviceService {
  theatre:SelectedTheater;
  constructor() { }

}
