import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMedicineRoutingModule } from './manage-medicine-routing.module';

//--components imports
import { ManageMedicinesComponent } from '../../components/manage-medicine/manage-medicines/manage-medicines.component';
import { AddCategoryMedicineComponent } from '../../components/manage-medicine/add-category-medicine/add-category-medicine.component';
import { AddMedicineComponent } from '../../components/manage-medicine/add-medicine/add-medicine.component';
import { ViewMedicinesComponent } from '../../components/manage-medicine/view-medicines/view-medicines.component';
import { ViewCategoryMedicinesComponent } from '../../components/manage-medicine/view-category-medicines/view-category-medicines.component';
import { ModalEditCategoryMedicinesComponent } from '../../components/manage-medicine/modal-edit-category-medicines/modal-edit-category-medicines.component';
import { ModalEditMedicinesComponent } from '../../components/manage-medicine/modal-edit-medicines/modal-edit-medicines.component';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';


//--zorro imports
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';

//--other imports
import { ReactiveFormsModule } from '@angular/forms'

//--pipes imports
import { FilterCategoryMedicinesPipe } from '../../pipes/filter-category-medicines.pipe';
import { FilterMedicinesPipe } from '../../pipes/filter-medicines.pipe';

const components = [
  ManageMedicinesComponent,
  AddCategoryMedicineComponent,
  AddMedicineComponent,
  ViewMedicinesComponent,
  ViewCategoryMedicinesComponent,
  ModalEditMedicinesComponent,
  ModalEditCategoryMedicinesComponent
]

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule
]

const zorroComponents = [
  NzPopoverModule,
  NzMessageModule,
  NzTableModule
]

@NgModule({
  declarations: [
    ...components,
    FilterCategoryMedicinesPipe,
    FilterMedicinesPipe
  ],
  imports: [
    CommonModule,
    ManageMedicineRoutingModule,
    ...materialComponents,
    ...zorroComponents,
    ReactiveFormsModule
  ]
})
export class ManageMedicineModule { }
