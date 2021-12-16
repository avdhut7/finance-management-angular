import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forgotpassword } from './forgotpassword/forgotpassword.component';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http:HttpClient) { }

  forgotpassword(username:String):Observable<any>{
    let url ="http://localhost:9090/recover-password?username="+username;
    return this.http.get(url);
  }

}
