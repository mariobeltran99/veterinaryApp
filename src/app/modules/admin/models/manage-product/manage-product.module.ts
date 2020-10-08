import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductRoutingModule } from './manage-product-routing.module';

//---components imports
import { ManageProductsComponent } from '../../components/manage-product/manage-products/manage-products.component';


const components = [
  ManageProductsComponent
]

const materialComponents = [

]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule,
    ...materialComponents
  ]
})
export class ManageProductModule { }
