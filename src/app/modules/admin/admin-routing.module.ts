import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageHomeComponent } from './components/manage-home/manage-home.component';
import { ViewadminComponent } from './components/viewadmin/viewadmin.component';


const routes: Routes = [
  {
    path: '',
    component: ViewadminComponent,
    children: [
      { 
        path: 'manage-home', 
        component: ManageHomeComponent 
      },
      { 
        path: 'manage-users', 
        loadChildren: () => import('./models/manage-user/manage-user.module').then(m => m.ManageUserModule)
      },
      { 
        path: 'manage-providers',
        loadChildren: () => import('./models/manage-provider/manage-provider.module').then(m => m.ManageProviderModule)  
      },
      { 
        path: 'manage-products',
        loadChildren: () => import('./models/manage-product/manage-product.module').then(m => m.ManageProductModule)  
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
