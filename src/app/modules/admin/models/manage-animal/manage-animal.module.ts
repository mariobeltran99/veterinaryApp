import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAnimalRoutingModule } from './manage-animal-routing.module';

//--components imports
import { ManageAnimalsComponent } from '../../components/manage-animal/manage-animals/manage-animals.component';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


//--zorro imports
import { NzPopoverModule } from 'ng-zorro-antd/popover';

const components = [
  ManageAnimalsComponent
]

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
]

const zorroComponents = [
  NzPopoverModule
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ManageAnimalRoutingModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class ManageAnimalModule { }
