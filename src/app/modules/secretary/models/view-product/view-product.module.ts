import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';

//--components imports
import { ProductsComponent } from '../../components/products/products.component';

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
import { FilterProductPipe } from '../../pipes/filter-product.pipe';

const components = [
  ProductsComponent
]
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
  declarations: [
    ...components,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ViewProductRoutingModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class ViewProductModule { }
