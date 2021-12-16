import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotpasswordService } from '../forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  f:Forgotpassword=new Forgotpassword();
  message:string;
  constructor(private forgotpassword:ForgotpasswordService,private router:Router) { }

  ngOnInit(): void {
  }
  forgotPassword(f:NgForm){
    this.f.username=f.value.t1;
    this.forgotpassword.forgotpassword(this.f.username).subscribe(response =>{
     
       if(response.status == 'SUCESS'){
         this.message=response.message;
       }
       else
       this.message = response.message;
    })
    
  }

}

export class Forgotpassword{
  username:string;
}
