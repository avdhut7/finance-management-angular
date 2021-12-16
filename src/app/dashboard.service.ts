import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

  constructor(private http: HttpClient) { }

  fetchCard(userId : Number): Observable<any>{
    let url = "http://localhost:9090/dashboard-card?userId=" +userId;
    return this.http.get(url);
  }

  upgrade(cardNo: Number){
    let url = "http://localhost:9090/upgrade?cardNo=" +cardNo;
    return this.http.get(url);

  }

  // downgrade(userId : Number){
  //   let url = "http://localhost:9090/downgrade?userId=" +userId;
  //   return this.http.get(url);
  // }

  fetchPurchase(userId : Number): Observable<any>{
    let url = "http://localhost:9090/dashboard-purchase-history?userId=" +userId;
    return this.http.get(url);
  }

  fetchInstallment(id : Number): Observable<any>{
    let url = "http://localhost:9090/dashboard-installment-history?id=" +id;
    return this.http.get(url);
  }
  
  payInstallment(id: Number) : Observable<any>{
    let url = "http://localhost:9090/installment-payment?installmentId=" +id;
    return this.http.get(url);
  }

}
