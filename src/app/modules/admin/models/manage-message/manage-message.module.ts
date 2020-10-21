import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMessageRoutingModule } from './manage-message-routing.module';

//--components imports
import { ManageMessagesComponent } from '../../components/manage-message/manage-messages/manage-messages.component';
import { ModalMessageComponent } from '../../components/manage-message/modal-message/modal-message.component';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


//--zorro imports
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';

//--pipes imports
import { FilterContactPipe } from '../../pipes/filter-contact.pipe';

//--others imports
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  ManageMessagesComponent,
  ModalMessageComponent
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
  NzPopoverModule,
  NzTableModule,
  NzMessageModule
]

@NgModule({
  declarations: [
    ...components,
    FilterContactPipe
  ],
  imports: [
    CommonModule,
    ManageMessageRoutingModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class ManageMessageModule { }
