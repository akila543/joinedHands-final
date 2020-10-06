import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedcomhomepageComponent } from './medcomhomepage/medcomhomepage.component';
import { AlttherapyComponent } from './alttherapy/alttherapy.component';
import { SupportcomComponent } from './supportcom/supportcom.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    MessageDialogComponent,
    NavbarComponent,
    MedcomhomepageComponent,
    AlttherapyComponent,
    SupportcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatStepperModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    MessageDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
