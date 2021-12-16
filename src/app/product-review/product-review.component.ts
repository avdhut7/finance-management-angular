import { Component, OnInit } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';
import { ProductReviewService } from '../product-review.service';
import { User } from '../user-details/user-details.component';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {

  currentRate = 0;
  productReview:ProductReview;
  productReview2:ProductReview = new ProductReview();
  r : Review = new Review();
  message : String;
  constructor(private productReviewService:ProductReviewService) { }

  ngOnInit(): void {
    this.fetchReview();
  }

  fetchReview(){
    this.productReviewService.fetchProductReview(Number(sessionStorage.getItem('productId'))).subscribe(response => {
      this.productReview=response;
      
    })
  }

  addProductReview(){
    this.r.productReview = this.productReview2;
    this.r.productId = Number(sessionStorage.getItem('productId'));
    this.r.userId = Number(sessionStorage.getItem('customerId'));
    this.productReviewService.addReview(this.r).subscribe(response =>{
      this.ngOnInit();
      this.message = "Review added successfully"; 
    })
  }

}
export class ProductReview{

  reviewId:Number;
  review:String;
  rating:Number;
  user:User;
  product:Product;
  
}

export class Review {
  productReview : ProductReview;
  userId:Number;
  productId : Number;
}