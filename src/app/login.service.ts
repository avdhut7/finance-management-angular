import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(login: Login):Observable<any>{
    let url ="http://localhost:9090/login";
    return this.http.post(url,login);
  }
}
