import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(){
  var uname=localStorage.getItem("user");
   var reqbody={
      "name":uname
    }
    console.log("inside service");
    return this.http.post("http://52.66.154.237:5000/login",reqbody);
  }

  logout(){
    var uname=localStorage.getItem("user");
    var reqbody={
       "name":uname
     }
     console.log("inside service");
     return this.http.post("http://52.66.154.237:5000/logout",reqbody);
  }
}
