import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Guards
import { CanAdminGuard } from './modules/auth/guards/can-admin.guard';
import { CanClientGuard } from './modules/auth/guards/can-client.guard';
import { CanGrocerGuard } from './modules/auth/guards/can-grocer.guard';
import { CanVerifyGuard } from './modules/auth/guards/can-verify.guard';
import { CanVeterinarianGuard } from './modules/auth/guards/can-veterinarian.guard';
//views
import { HomeComponent } from './modules/home/components/home/home.component';
import { LicensesComponent } from './modules/home/components/licenses/licenses.component';
import { ViewadminComponent } from './modules/admin/components/viewadmin/viewadmin.component';
import { ForgotComponent } from './modules/auth/components/forgot/forgot.component';
import { ViewloginComponent } from './modules/auth/components/login/viewlogin/viewlogin.component';
import { VerifyComponent } from './modules/auth/components/verify/verify.component';
import { ViewclientComponent } from './modules/client/components/viewclient/viewclient.component';
import { ViewgrocerComponent } from './modules/grocer/components/viewgrocer/viewgrocer.component';
import { PagenotfoundComponent } from './modules/core/components/pagenotfound/pagenotfound.component';
import { ViewveterinarianComponent } from './modules/veterinarian/components/viewveterinarian/viewveterinarian.component';
import { ManageUsersComponent } from './modules/admin/components/manage-users/manage-users.component';
import { ManageProvidersComponent } from './modules/admin/components/manage-providers/manage-providers.component';
import { ManageProductsComponent } from './modules/admin/components/manage-products/manage-products.component';
import { ManageHomeComponent } from './modules/admin/components/manage-home/manage-home.component';
import { StepsInitialComponent } from './modules/auth/components/steps-initial/steps-initial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: ViewloginComponent,
  },
  {
    path: 'client',
    component: ViewclientComponent,
    canActivate: [CanClientGuard],
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
  {
    path: 'steps-register',
    component: StepsInitialComponent,
    canActivate: [CanClientGuard],
  },
  {
    path: 'admin',
    component: ViewadminComponent,
    canActivate: [CanAdminGuard],
    children: [
      { path: 'manage-home', component: ManageHomeComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-providers', component: ManageProvidersComponent },
      { path: 'manage-products', component: ManageProductsComponent },
    ],
  },
  {
    path: 'veterinarian',
    component: ViewveterinarianComponent,
    canActivate: [CanVeterinarianGuard],
  },
  {
    path: 'grocer',
    component: ViewgrocerComponent,
    canActivate: [CanGrocerGuard],
  },
  {
    path: 'licenses',
    component: LicensesComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
