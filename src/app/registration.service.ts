import { User } from './user-details/user-details.component';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  

  constructor(private http: HttpClient) { }

  public registerUser(user:User): Observable<any> {
    let url="http://localhost:9090/registration";
    return this.http.post(url,user)
  }
}
