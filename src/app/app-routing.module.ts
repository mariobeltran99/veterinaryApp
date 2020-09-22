import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewadminComponent } from './modules/admin/components/viewadmin/viewadmin.component';
import { ForgotComponent } from './modules/auth/forgot-password/components/forgot/forgot.component';
import { CanAdminGuard } from './modules/auth/guards/can-admin.guard';
import { CanClientGuard } from './modules/auth/guards/can-client.guard';
import { CanGrocerGuard } from './modules/auth/guards/can-grocer.guard';
import { CanVeterinarianGuard } from './modules/auth/guards/can-veterinarian.guard';
import { ViewloginComponent } from './modules/auth/login/components/viewlogin/viewlogin.component';
import { VerifyComponent } from './modules/auth/sendEmail/components/verify/verify.component';
import { ViewclientComponent } from './modules/client/components/viewclient/viewclient.component';
import { ViewgrocerComponent } from './modules/grocer/components/viewgrocer/viewgrocer.component';
import { PagenotfoundComponent } from './modules/pagenot/components/pagenotfound/pagenotfound.component';
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
    component:ViewadminComponent,
    canActivate:[CanAdminGuard]
  },
  {
    path:'veterinarian',
    component:ViewveterinarianComponent,
    canActivate:[CanVeterinarianGuard]
  },
  {
    path:'grocer',
    component:ViewgrocerComponent,
    canActivate:[CanGrocerGuard]
  },{
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
