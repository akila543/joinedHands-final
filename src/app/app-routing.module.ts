import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedcomhomepageComponent } from './medcomhomepage/medcomhomepage.component';
import { AlttherapyComponent } from './alttherapy/alttherapy.component';
import { SupportcomComponent } from './supportcom/supportcom.component';

const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"", component:HomepageComponent},
    {path:"medical-community", component:MedcomhomepageComponent},
    {path:"alternate-therapy", component:AlttherapyComponent},
    {path:"support-community", component:SupportcomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
