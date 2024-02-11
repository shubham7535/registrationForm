import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  Url= "https://localhost:44343/api/";

  registerUSer(user: Array<any>){
  return this.http.post(this.Url + "User/CreateUser",{
    user
  },{
    responseType:'text',
  });
  } 
}
