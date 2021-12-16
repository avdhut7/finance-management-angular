import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin:AdminLogin = new AdminLogin();
  message:string;

  constructor(private adminLoginService:AdminloginService,private router: Router) { 

  }

  ngOnInit() {
  }

  adminLoginCheck(adminlogin : NgForm){
    this.adminlogin.username = adminlogin.value.t1;
    this.adminlogin.password = adminlogin.value.t4;
    this.adminLoginService.login(this.adminlogin).subscribe(response =>{
       if(response.status == 'SUCESS'){
         
        this.router.navigate(['userdetails']);
         
       }
       else
       this.message = response.message;
    })
  }

}

export class AdminLogin{
  username:string;
  password:string;
}
