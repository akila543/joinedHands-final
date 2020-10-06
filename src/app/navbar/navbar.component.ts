import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  flag:string="guest";
  user:string;
  constructor(private router:Router, public dialog: MatDialog,private loginservice:LoginService) { }

  ngOnInit(): void {
    // console.log("length",localStorage.getItem("usertype").length);
    console.log("local storage-->", localStorage.getItem("usertype"));
    if(localStorage.getItem("usertype")!="" && localStorage.getItem("usertype")!=null && localStorage.getItem("usertype")!=undefined && localStorage.getItem("usertype").length!=0)

    {
      this.flag=localStorage.getItem("usertype");
      this.user=localStorage.getItem("user");
      console.log("inside user");
    }
    else
    {
      this.flag="guest";
      console.log("inside guest");
    }

  }

  login()
  {
    this.router.navigate(['login']);
  }

  register()
  {
    this.router.navigate(['register']);
  }

  logout(){
    this.loginservice.logout().subscribe(
      (data)=>{
        console.log("data",data);
      },
      (err)=>{
        console.log("error",err);
      }
    )
    localStorage.setItem("usertype","");
    localStorage.setItem("user","");
    this.flag="guest";
    localStorage.setItem("message","logout");
      const dialogRef = this.dialog.open(MessageDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        localStorage.setItem("message","");
      });
  }

  home(){
    this.router.navigate(['']);
  }
}
