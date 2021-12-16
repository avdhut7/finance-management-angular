import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../dashboard/dashboard.component';
import { ProductsService } from '../products.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  

  constructor(private userService : UserDetailsService, private productService: ProductsService,private fb: FormBuilder) {
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);
   }

  users : User[];
  user : User;
  message : String;
  message1 : String;
  productlist: Product[];
  product : Product = new Product();
  id: Number;
  names :String;
  message2: string;

  addForm: FormGroup;
  rows: FormArray;
  itemForm: FormGroup;

  ngOnInit(): void {
    this.showAll();
    this.showAllProducts();
    this.addForm.addControl('rows', this.rows);
    }

  showAll(){
    this.userService.showAll().subscribe(response => {
      this.users = response;
    })
  }

  showAllProducts() {
    this.productService.showAll().subscribe(response => {
      this.productlist = response;
    })
  }

  deleteUser(user : User){
    this.user= user;
      this.userService.delete(this.user.userId).subscribe(response =>{
        this.showAll();
      });
  }

  deleteProduct(product : Product){
      this.userService.deleteP(product.productId).subscribe(response =>{
        this.showAllProducts();
      });
  }

  editProduct(product : Product){
    this.userService.editP(product).subscribe(response =>{
      this.message1 = "Product with product id "+response+" updated.";
      this.showAllProducts();
    });
  }





  saveProduct(product:NgForm){
    this.product.productName = product.value.productName;
    this.product.productDetails = product.value.productDetails;
    this.product.productPrice = product.value.productPrice;
    this.product.vendor = product.value.vendor;
    this.product.maxTenure = product.value.maxTenure;
    this.product.quantity = product.value.quantity;
    this.product.productImage = "/assets/images/tv.jpg";
    this.product.eligibility = "gold";

    this.userService.saveP(this.product).subscribe(response => {
      this.message2 = "New Product with product id "+response+" saved.";
      this.showAllProducts();
    })
  }

  activateUser(user : User){
    this.user= user;
    this.userService.activate(this.user.userId).subscribe(respose =>{
      this.showAll();
      this.addCard(user.userId, user.cardType);
    });
  }

  addCard(userId : Number, cardType : String){
    this.userService.addCard(userId,cardType).subscribe(response =>{
      this.message = "User activated. New card generarted for user with card number "+response+". A mail has been sent to corresponding user with his card number.";
    })
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex:number){
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      product : Product
    });
  }

}

export class User {
  userId : Number;
  name : String;
  dateOfBirth : Date;
  email : String;
  phoneNo : Number;
  username : String;
  password : String;
  address : String;
  cardType : String;
  bankName:String;
  accountNo : Number;
  ifscCode : String;
  userStatus:String;
  
}
