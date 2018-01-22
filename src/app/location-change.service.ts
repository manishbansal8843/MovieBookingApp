import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';
@Injectable()
export class LocationChangeService {
locationChange:EventEmitter<string>=new EventEmitter();
  constructor() { }

}
