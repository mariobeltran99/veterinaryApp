import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ViewgrocerComponent } from './components/viewgrocer/viewgrocer.component';

const routes: Routes = [
  {
    path: '',
    component: ViewgrocerComponent,
    children:[
      {
        path:'manage-providers',
        loadChildren: () => import('../admin/models/manage-provider/manage-provider.module').then(m => m.ManageProviderModule)  
      },
      { 
        path: 'manage-products',
        loadChildren: () => import('../admin/models/manage-product/manage-product.module').then(m => m.ManageProductModule)  
      },
      { 
        path: 'manage-medicines',
        loadChildren: () => import('../admin/models/manage-medicine/manage-medicine.module').then(m => m.ManageMedicineModule)  
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrocerRoutingModule { }
