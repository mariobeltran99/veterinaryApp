import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//---components imports
import { AddCategoryProductComponent } from '../../components/manage-product/add-category-product/add-category-product.component';
import { AddProductComponent } from '../../components/manage-product/add-product/add-product.component';
import { ManageProductsComponent } from '../../components/manage-product/manage-products/manage-products.component';
import { ViewCategoryProductComponent } from '../../components/manage-product/view-category-product/view-category-product.component';
import { ViewProductsComponent } from '../../components/manage-product/view-products/view-products.component';


const routes: Routes = [
  {
    path: '',
    component: ManageProductsComponent,
  },
  {
    path:'add-product',
    component: AddProductComponent
  },
  {
    path:'view-products',
    component:ViewProductsComponent
  },
  {
    path:'add-category-product',
    component:AddCategoryProductComponent
  },
  {
    path:'view-category-products',
    component:ViewCategoryProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductRoutingModule { }
