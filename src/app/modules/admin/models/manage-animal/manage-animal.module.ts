import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAnimalRoutingModule } from './manage-animal-routing.module';

//--components imports
import { ManageAnimalsComponent } from '../../components/manage-animal/manage-animals/manage-animals.component';
import { AddAnimalsComponent } from '../../components/manage-animal/add-animals/add-animals.component';
import { ViewAnimalsComponent } from '../../components/manage-animal/view-animals/view-animals.component';
import { ModalEditAnimalComponent } from '../../components/manage-animal/modal-edit-animal/modal-edit-animal.component';


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
import { FilterAnimalsPipe } from '../../pipes/filter-animals.pipe';

const components = [
  ManageAnimalsComponent,
  AddAnimalsComponent,
  ViewAnimalsComponent,
  ModalEditAnimalComponent
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
    FilterAnimalsPipe
  ],
  imports: [
    CommonModule,
    ManageAnimalRoutingModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class ManageAnimalModule { }
