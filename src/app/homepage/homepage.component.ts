import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loggedIn: string;

  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loggedIn=localStorage.getItem("usertype");
  }

  supportcom(){
    if(this.loggedIn==""){
      localStorage.setItem("message","login");
      const dialogRef = this.dialog.open(MessageDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        localStorage.setItem("message","");
      });
    }
    else{
      this.router.navigate(['support-community']);
    }
  }

  medicalcom(){
    if(this.loggedIn==""){
      localStorage.setItem("message","login");
      const dialogRef = this.dialog.open(MessageDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        localStorage.setItem("message","");
      });
    }
    else{
      this.router.navigate(['medical-community']);
    }
  }
}
