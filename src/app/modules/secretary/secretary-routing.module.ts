import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ViewsecretaryComponent } from './components/viewsecretary/viewsecretary.component';


const routes: Routes = [
  {
    path:'',
    component: ViewsecretaryComponent,
    children:[
      {
        path:'manage-messages',
        loadChildren: () => import('../admin/models/manage-message/manage-message.module').then(m => m.ManageMessageModule)
      },
      {
        path:'view-products',
        loadChildren: () => import('../secretary/models/view-product/view-product.module').then(m => m.ViewProductModule)
      },
      {
        path: 'view-medicines',
        loadChildren: () => import('../secretary/models/view-medicine/view-medicine.module').then(m => m.ViewMedicineModule)
      },
      {
        path: 'verify-reservation',
        loadChildren: () => import('../secretary/models/reservation/reservation.module').then(m => m.ReservationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
