import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movies } from './movies/movies';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieFetchService {

  url:string='/assets/movies.json';
  constructor(private _http:Http) { }
  getmovies():Observable<Movies[]>{
    //console.log('going to fetch movies');
    return this._http.get(this.url).map((res:Response)=>res.json() as Movies[]).do(res=>console.log(res)).catch(this.handleError);
  }
  handleError(error:Response){
    return Observable.throw('error while fetching movies'||error.json().error);
  }
  getmovie(name:string):Observable<Movies>{
    
    return this.getmovies().map((movies:Movies[])=> movies.filter((movie:Movies)=>movie.name==name )[0]);
  }
}
