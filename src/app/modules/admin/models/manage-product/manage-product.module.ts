import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductRoutingModule } from './manage-product-routing.module';

//---components imports
import { ManageProductsComponent } from '../../components/manage-product/manage-products/manage-products.component';
import { AddCategoryProductComponent } from '../../components/manage-product/add-category-product/add-category-product.component';
import { ViewCategoryProductComponent } from '../../components/manage-product/view-category-product/view-category-product.component';
import { ModalEditCategoryProductComponent } from '../../components/manage-product/modal-edit-category-product/modal-edit-category-product.component';
import { AddProductComponent } from '../../components/manage-product/add-product/add-product.component';
import { ViewProductsComponent } from '../../components/manage-product/view-products/view-products.component';
import { ModalEditProductComponent } from '../../components/manage-product/modal-edit-product/modal-edit-product.component';
import { ModalDetailProductComponent } from '../../components/manage-product/modal-detail-product/modal-detail-product.component';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

//--zorro imports
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRateModule } from 'ng-zorro-antd/rate';

//--other imports
import { ReactiveFormsModule } from '@angular/forms';

//--pipes imports
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { FilterCategoryProductsPipe } from '../../pipes/filter-category-products.pipe';

const components = [
  ManageProductsComponent,
  AddCategoryProductComponent,
  ViewCategoryProductComponent,
  ModalEditCategoryProductComponent,
  AddProductComponent,
  ViewProductsComponent,
  ModalEditProductComponent,
  ModalDetailProductComponent,
];

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule,
  MatSelectModule,
];

const zorroComponents = [
  NzPopoverModule,
  NzMessageModule,
  NzTableModule,
  NzRateModule,
];

@NgModule({
  declarations: [...components, FilterCategoryProductsPipe, FilterProductsPipe],
  imports: [
    CommonModule,
    ManageProductRoutingModule,
    ...materialComponents,
    ...zorroComponents,
    ReactiveFormsModule
  ],
})
export class ManageProductModule {}
