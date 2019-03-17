import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";
import {RegisterRequestModel} from "../models/register.request.model";
import {LoginRequestModel} from "../models/login.request.model";
import {UserModel} from "../models/user.model";
import {TokenStorage} from "./token.storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.backUrl+"/api";
  currentUser:UserModel = null;

  constructor(private http: HttpClient) { }

  public attemptSignIn(loginRequest : LoginRequestModel): Observable<any> {
    return this.http.post(this.baseUrl+'/auth/login',loginRequest);
  }

  public attemptSignUp(registerRequest : RegisterRequestModel): Observable<any> {
    return this.http.post(this.baseUrl+'/auth/register',registerRequest);
  }

  public initUser():Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'/auth/me').subscribe((response: any) => {
        this.currentUser = response;
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }


}
