import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  message:string;
  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit():void {
  }

  loginCheck(login:NgForm){
      this.login.username=login.value.t1;
      this.login.password=login.value.t4;
    
    this.loginService.login(this.login).subscribe(response =>{
      if(response.status == 'SUCESS'){
        
         let customerId = response.customerId;
         let customerName = response.customerName;
         sessionStorage.setItem('customerId' ,String(customerId));
         sessionStorage.setItem('customerName',customerName);
        
         this.router.navigate(['dashboard']);
        
       }
       else
       this.message = response.message;
    })
    
  }

}
export class Login{
  username:string;
  password:string;
}

