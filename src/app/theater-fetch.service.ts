import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Theater } from './movies/moviedetails/theater';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TheaterFetchService {
  constructor(private http:Http) { }
  fetchTheaters(location:string):Observable<Theater[]>{
    return this.http.get('/assets/'+location+'-theator.json').map((res:Response)=>res.json() as Theater[] ).do(resp=>console.log(resp)).catch(this.handleErr);

  }

  handleErr(error:Response){
    return Observable.throw('error while fetching theaters'||error.json().error);
    
  }

}
