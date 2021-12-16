import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
}
   showAll(): Observable<any>{
    let url = "http://localhost:9090/productlist-info";
    return this.http.get(url);
  }
  // find(productId:Number): Observable<any>{
  //    let url="http://localhost:9090/product-info?productId=?"+productId;
  //    return this.http.get(url);
  // }
}
