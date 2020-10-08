import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//---components imports
import { ManageProductsComponent } from '../../components/manage-product/manage-products/manage-products.component';


const routes: Routes = [
  {
    path: '',
    component: ManageProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductRoutingModule { }
