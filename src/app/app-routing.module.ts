import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './modules/auth/forgot-password/components/forgot/forgot.component';
import { ViewloginComponent } from './modules/auth/login/components/viewlogin/viewlogin.component';
import { VerifyComponent } from './modules/auth/sendEmail/components/verify/verify.component';
import { ViewclientComponent } from './modules/client/components/viewclient/viewclient.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'login',
    component:ViewloginComponent
  },
  {
    path:'client',
    component:ViewclientComponent
  },
  {
    path:'verify',
    component:VerifyComponent
  },
  {
    path:'forgot-password',
    component:ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
