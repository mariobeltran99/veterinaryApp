import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageDepartamentRoutingModule } from './manage-departament-routing.module';

//--components imports
import { ManageDepartamentsComponent } from '../../components/manage-departament/manage-departaments/manage-departaments.component';
import { AddDepartmentComponent } from '../../components/manage-departament/add-department/add-department.component';
import { ViewDepartmentsComponent } from '../../components/manage-departament/view-departments/view-departments.component';
import { ModalEditDepartmentComponent } from '../../components/manage-departament/modal-edit-department/modal-edit-department.component';

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

//--pipe imports
import { FilterDepartmentsPipe } from '../../pipes/filter-departments.pipe';

const components = [
  ManageDepartamentsComponent,
  AddDepartmentComponent,
  ViewDepartmentsComponent,
  ModalEditDepartmentComponent
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
    FilterDepartmentsPipe
  ],
  imports: [
    CommonModule,
    ManageDepartamentRoutingModule,
    ...materialComponents,
    ...zorroComponents,
    ReactiveFormsModule
  ]
})
export class ManageDepartamentModule { }
