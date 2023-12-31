import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = "http://localhost:8080/api/auth";

  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
  constructor(private httpclient: HttpClient) {
  }

  public login(loginData: any){
    return this.httpclient.post(this.PATH_OF_API + "/login" , loginData , {headers: this.requestHeader});
  }
}
