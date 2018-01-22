import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

import { UserLogin } from './login/user';

@Injectable()
export class LoginService {
  url:string='./assets/users.json';
  constructor(private _http:Http) { }
  getUsers():Observable<UserLogin[]>{
   return this._http.get(this.url).map((response:Response)=>response.json() as UserLogin[]).do(res=>console.log(res)).catch(this.handleErr);
    
    
  }
  handleErr(error:Response){
    console.log(error);
    return Observable.throw('Error while fetching users'||error.json().error);
  }
}
