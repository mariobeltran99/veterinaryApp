import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--guards
import { CanVerifyGuard } from './guards/can-verify.guard';

//--components imports
import { ForgotComponent } from './components/forgot/forgot.component';
import { ViewloginComponent } from './components/login/viewlogin/viewlogin.component';
import { VerifyComponent } from './components/verify/verify.component';



const routes: Routes = [
  {
    path: '',
    component: ViewloginComponent
  },
  {
    path: 'verify',
    component: VerifyComponent,
    canActivate: [CanVerifyGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
