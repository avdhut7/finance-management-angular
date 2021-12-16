import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../dashboard/dashboard.component";
import { ProductsService } from "../products.service";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  productlist: Product[];
  
  constructor(private productService: ProductsService, private router: Router) { }
  
  ngOnInit() {
    this.showAll();
    
    
  }

  showAll() {
    this.productService.showAll().subscribe(response => {
      this.productlist = response;
    })
    
 
  }

  updateSessionstorage(productId: Number){
    sessionStorage.setItem('productId',String(productId));
  }
 
  }

  
  
  
  
  
