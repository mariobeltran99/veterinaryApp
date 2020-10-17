import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ViewsecretaryComponent } from './components/viewsecretary/viewsecretary.component';
import {SecretaryHomeComponent} from './components/secretary-home/secretary-home.component'


const routes: Routes = [
  {
    path:'',
    component: ViewsecretaryComponent,
    children: [
      {
        path: 'secretary-home',
        component: SecretaryHomeComponent
      },
      {
        path: 'reports',
        loadChildren: () => import('./models/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./models/reservations/reservations.module').then(m => m.ReservationsModule)
      },
      {
        path: 'view-products',
        loadChildren: () => import('./models/view-products/view-products.module').then(m => m.ViewProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
