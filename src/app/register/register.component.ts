import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  gender=new FormControl();
  id=new FormControl();
  service=new FormControl();

  registerControl=new FormControl();
  register=['Early Help Seeker','Patient','Caregiver','Support Volunteer','Organiztion'];
  registerGroups=[

   {
     name: 'Medical Community Member',
     role: [
       {value: 'Doctor'},
       {value: 'Nurse'},
       {value: 'Paramedic'},
       {value: 'Radiologist'},
       {value: 'Research Scientist'}

     ]
   }
 ];
 volunteer:any;
 services=['Give Rides','Run Errands','Offer Counselling Sessions','Offer a Meal','Offer Baby Sitting']

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      age:['',Validators.required],
      email:['', Validators.required],
      phone:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      zipcode:['', Validators.required],
      licenseno:['',Validators.required],
      licensestate:['', Validators.required],
      idno:['',Validators.required],
      idstate:['',Validators.required]
    });

    this.registerControl.setValue(this.register[3]);
    this.gender.setValue("Male");
    this.id.setValue("State Issued ID");
    // this.service.setValue(this.services[0]);
    this.volunteer=['Give Rides', 'Offer Baby Sitting'];
    this.firstFormGroup.setValue({
     firstCtrl: 'Mike Anderson',
     age: '25',
     email:'mike@gmail.com',
     phone:'6234812100'
});

this.secondFormGroup.setValue({
  Address1: '12B, Bluemount Apartments',
  Address2: '7th Avenue',
  city:'El Monte',
  state:'Los Angeles',
  zipcode:'91731',
  licenseno:'LA5432101',
  licensestate:'Los Angeles',
  idno:'EL1814321',
  idstate:'Los Angeles'
});
  }

  someMethod(event){
      console.log("event",event);
      console.log("volunteer",this.volunteer);
    }

    save(){
      localStorage.setItem("message","register");
      const dialogRef = this.dialog.open(MessageDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        localStorage.setItem("message","");
      });
    }
}



// constructor() { }

//   ngOnInit(): void {
//   }
//
