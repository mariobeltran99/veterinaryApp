import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Guards
import { CanAdminGuard } from './modules/auth/guards/can-admin.guard';
import { CanClientGuard } from './modules/auth/guards/can-client.guard';
import { CanGrocerGuard } from './modules/auth/guards/can-grocer.guard';
import { CanVeterinarianGuard } from './modules/auth/guards/can-veterinarian.guard';
import { CanSecretaryGuard } from './modules/auth/guards/can-secretary.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'client',
    loadChildren:  () => import('./modules/client/client.module').then(m => m.ClientModule),
    canActivate: [CanClientGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [CanAdminGuard],

  },
  {
    path: 'veterinarian',
    loadChildren: () => import('./modules/veterinarian/veterinarian.module').then(m => m.VeterinarianModule),
    canActivate: [CanVeterinarianGuard],
  },
  {
    path: 'grocer',
    loadChildren: () => import('./modules/grocer/grocer.module').then(m => m.GrocerModule),
    canActivate: [CanGrocerGuard],
  },
  {
    path: 'secretary',
    loadChildren: () => import('./modules/secretary/secretary.module').then(m => m.SecretaryModule),
    canActivate: [CanSecretaryGuard]
  },
  {
    path: 'steps-register',
    loadChildren: () => import('./modules/auth/models/step-initial.module').then(m => m.StepInitialModule),
    canActivate: [CanClientGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
