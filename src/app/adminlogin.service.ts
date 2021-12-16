import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from './adminlogin/adminlogin.component';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  login(adminlogin:AdminLogin):Observable<any>{
    let url ="http://localhost:9090/admin-login";
  return this.http.post(url,adminlogin);
  }
}
