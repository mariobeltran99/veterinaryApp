import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserRoutingModule } from './manage-user-routing.module';

//--components imports
import { ManageUsersComponent } from '../../components/manage-user/manage-users/manage-users.component';
import { ViewUsersClientsComponent } from '../../components/manage-user/view-users-clients/view-users-clients.component';
import { ViewUsersComponent } from '../../components/manage-user/view-users/view-users.component';
import { AddUserComponent } from '../../components/manage-user/add-user/add-user.component';
import { ModalEditDisabledComponent } from '../../components/manage-user/modal-edit-disabled/modal-edit-disabled.component';
import { ModalEditUserComponent } from '../../components/manage-user/modal-edit-user/modal-edit-user.component';
import { ModalDetailUserComponent } from '../../components/manage-user/modal-detail-user/modal-detail-user.component';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


//--zorro imports
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';

//--other imports
import { ReactiveFormsModule } from '@angular/forms';

//--pipes imports
import { FilterUsersClientsPipe } from '../../pipes/filter-users-clients.pipe';
import { FilterUsersPipe } from '../../pipes/filter-users.pipe';

const components = [
  ManageUsersComponent,
  ViewUsersClientsComponent,
  ViewUsersComponent,
  AddUserComponent,
  ModalEditDisabledComponent,
  ModalDetailUserComponent,
  ModalEditUserComponent
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
  MatSlideToggleModule,
];

const zorroComponents = [NzPopoverModule, NzMessageModule, NzTableModule];

@NgModule({
  declarations: [...components, FilterUsersClientsPipe, FilterUsersPipe],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    ...materialComponents,
    ...zorroComponents,
    ReactiveFormsModule,
  ],
})
export class ManageUserModule {}
