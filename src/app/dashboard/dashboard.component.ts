import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { ProductsComponent } from '../products/products.component';
import { User } from '../user-details/user-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  id:Number = Number(sessionStorage.getItem('customerId'));
  showHide: boolean;
  showHide2: boolean;
  showHide3: boolean;
  showHide4:boolean;
  //showHide5:boolean;

  constructor(private dashboardService : DashboardService,private router: Router) {
    this.showHide=false;
    this.showHide2=false;
    this.showHide3=false;
    this.showHide4=true;
    //this.showHide5=false;
   }

  ngOnInit(): void {
    this.fetchCard();
    this.fetchPurchase();
  }

  

  card : EMICard;

  fetchCard(){

    this.dashboardService.fetchCard(this.id).subscribe(response => {
      this.card = response;
    });
  }

  purchases : Purchases[];
  purchase : Purchases;

  fetchPurchase(){
    this.dashboardService.fetchPurchase(this.id).subscribe(response => {
      this.purchases = response;
    });
    
  }

  changeShowStatus(){
    this.showHide = true;
    this.showHide2=false;
    this.showHide3=false;
    this.showHide4=false;
  }
  changeShowStatus2(){
    this.showHide2 = true;
    this.showHide = false;
    this.showHide3=false;
    this.showHide4=false;
  }
  changeShowStatus3(){
    this.showHide3 = true;
    this.showHide2 = false;
    this.showHide=false;
    this.showHide4=false;
  }
  

}

export class EMICard{
  cardNo : Number;
  validityOfCard : Date;
  cardType : String;
  balance : Number;
  registration : User;
}

export class Purchases{
  id : Number;
  tenurePeriodOpted : Number;
  dateOfPurchase : Date;
  remainingAmount : Number;
  installmentsRemaining : Number;
  registration : User;
  product :Product;
  emiCard : EMICard;
}

export class Product {
  productId : Number;
  productName : String;
  vendor :String;
  productPrice : Number | any;
  productDetails : String;
  eligibility : String;
  quantity : Number;
  maxTenure : Number;
  productImage : String;
}

export class Installments {
  installmentId : Number;
  paymentDate : Date;
  amountPaid : Number;
  dueDate : Date;
  status : String;
  purchases : Purchases;
}