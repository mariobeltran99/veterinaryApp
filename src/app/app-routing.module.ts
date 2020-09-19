import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewadminComponent } from './modules/admin/components/viewadmin/viewadmin.component';
import { ForgotComponent } from './modules/auth/forgot-password/components/forgot/forgot.component';
import { CanClientGuard } from './modules/auth/guards/can-client.guard';
import { ViewloginComponent } from './modules/auth/login/components/viewlogin/viewlogin.component';
import { VerifyComponent } from './modules/auth/sendEmail/components/verify/verify.component';
import { ViewclientComponent } from './modules/client/components/viewclient/viewclient.component';
import { ViewgrocerComponent } from './modules/grocer/components/viewgrocer/viewgrocer.component';
import { ViewveterinarianComponent } from './modules/veterinarian/components/viewveterinarian/viewveterinarian.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:ViewloginComponent
  },
  {
    path:'client',
    component:ViewclientComponent,
    canActivate: [CanClientGuard]
  },
  {
    path:'verify',
    component:VerifyComponent
  },
  {
    path:'forgot-password',
    component:ForgotComponent
  },
  {
    path:'admin',
    component:ViewadminComponent
  },
  {
    path:'veterinarian',
    component:ViewveterinarianComponent
  },
  {
    path:'grocer',
    component:ViewgrocerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
