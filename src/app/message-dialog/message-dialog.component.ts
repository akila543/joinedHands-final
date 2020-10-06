import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  flag: string;

  constructor(public dialogRef: MatDialogRef<MessageDialogComponent>, private router:Router) { }

  ngOnInit(): void {
    this.flag=localStorage.getItem("message");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  home(){
    this.dialogRef.close();
    this.router.navigate(['']);
  }

  login(){
    this.dialogRef.close();
    this.router.navigate(['login']);
  }

  register(){
    this.dialogRef.close();
    this.router.navigate(['register']);
  }
}
