import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm=new UserLogin('','');
  users:UserLogin[];
  valid:boolean=true;
  constructor(private loginService:LoginService,private router:Router) { 
    console.log('constructing login comp');
    this.loginService.getUsers().subscribe((res)=>this.users=res);

  }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.userForm);
    sessionStorage.setItem('username',this.userForm.name);
    localStorage.setItem('password',this.userForm.password);
    var user=this.users.filter(user=>user.name==this.userForm.name && user.password==this.userForm.password)[0];
    if(user){
      console.log(user);
      this.router.navigate(['movies']);
    }
    else{
      this.valid=false;
    }
  }
}
