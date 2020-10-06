import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  constructor(private router:Router, private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    // this.router.navigate(['']);
    if(this.username=="john@gmail.com"){
      localStorage.setItem("usertype","caregiver");
      localStorage.setItem("user","John");
      this.loginservice.login().subscribe(
        (data)=>{
          console.log("data", data)
        },
        (err)=>{
          console.log("error", err);
        });
      this.router.navigate(['']);
    }
    if(this.username=="jane@gmail.com"){
      localStorage.setItem("usertype","doctor");
      localStorage.setItem("user","Jane");
      this.loginservice.login().subscribe(
        (data)=>{
          console.log("data", data)
        },
        (err)=>{
          console.log("error", err);
        });
      this.router.navigate(['']);
    }
    if(this.username=="mike@gmail.com"){
      localStorage.setItem("usertype","volunteer");
      localStorage.setItem("user","Mike");
      this.loginservice.login().subscribe(
        (data)=>{
          console.log("data", data)
        },
        (err)=>{
          console.log("error", err);
        });
      this.router.navigate(['']);
    }
  }
}
