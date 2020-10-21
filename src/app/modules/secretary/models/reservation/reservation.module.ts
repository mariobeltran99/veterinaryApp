import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';

//--components imports
import { VerifyReservationComponent } from '../../components/verify-reservation/verify-reservation.component';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

//--zorro imports
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRateModule } from 'ng-zorro-antd/rate';

//--other imports
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  VerifyReservationComponent
]

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule
];

const zorroComponents = [
  NzPopoverModule,
  NzMessageModule,
  NzTableModule,
  NzRateModule,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class ReservationModule { }
