import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medcomhomepage',
  templateUrl: './medcomhomepage.component.html',
  styleUrls: ['./medcomhomepage.component.css']
})
export class MedcomhomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
alt(){
  this.router.navigate(['alternate-therapy']);
}
}
