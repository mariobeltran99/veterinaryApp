import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProviderRoutingModule } from './manage-provider-routing.module';


//--components imports
import { ManageProvidersComponent } from '../../components/manage-provider/manage-providers/manage-providers.component';
import { AddProviderComponent } from '../../components/manage-provider/add-provider/add-provider.component';
import { ViewProvidersComponent } from '../../components/manage-provider/view-providers/view-providers.component';
import { ModalEditProviderComponent } from '../../components/manage-provider/modal-edit-provider/modal-edit-provider.component';
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
import { FilterProvidersPipe } from '../../pipes/filter-providers.pipe';

const components = [
  ManageProvidersComponent,
  AddProviderComponent,
  ViewProvidersComponent,
  ModalEditProviderComponent
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
    FilterProvidersPipe
  ],
  imports: [
    CommonModule,
    ManageProviderRoutingModule,
    ...materialComponents,
    ...zorroComponents,
    ReactiveFormsModule
  ]
})
export class ManageProviderModule { }
