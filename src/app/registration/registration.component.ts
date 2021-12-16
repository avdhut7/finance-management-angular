import { User } from './../user-details/user-details.component';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup, NgForm} from '@angular/forms'




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user:User= new User ();
  message:string;
  constructor (private registrationService: RegistrationService ,private router:Router) { }
  
  registerUser(user:NgForm) {
    this.user.name=user.value.name;
    this.user.dateOfBirth=user.value.dateOfBirth;
    this.user.email=user.value.email;
    this.user.phoneNo=user.value.phoneNo;
    this.user.username=user.value.username;
    this.user.password=user.value.password;
    this.user.cardType=user.value.cardtype;
    this.user.address=user.value.address;
    this.user.bankName=user.value.bankName;
    this.user.accountNo=user.value.accountNo;
    this.user.ifscCode=user.value.ifscCode;
    this.user.userStatus="pending";
    this.registrationService.registerUser(this.user).subscribe(response => {
     console.log(JSON.stringify(response));
      if (response.status="SUCCESS"){
        this.message=response.message;
      }
        else{
          this.message="Registration Failed";
        }
      
    })
  } 
} 
