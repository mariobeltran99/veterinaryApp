import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProviderRoutingModule } from './manage-provider-routing.module';


//--components imports
import { ManageProvidersComponent } from '../../components/manage-provider/manage-providers/manage-providers.component';

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
  ManageProvidersComponent
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
    ManageProviderRoutingModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class ManageProviderModule { }
