import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretaryRoutingModule } from './secretary-routing.module';


//--components imports
import { ViewsecretaryComponent } from './components/viewsecretary/viewsecretary.component';
import { NavbarSecretaryComponent } from './components/navbar-secretary/navbar-secretary.component';
import { SecretaryHomeComponent } from './components/secretary-home/secretary-home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';

//--icons imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//--others imports
import { ReactiveFormsModule } from '@angular/forms';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';


const components = [
  ViewsecretaryComponent,
  NavbarSecretaryComponent,
  ReportsComponent,
  ViewProductsComponent,
  ReservationsComponent,
  SecretaryHomeComponent
]

const materialComponents = [
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  LayoutModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...materialComponents
  ]
})
export class SecretaryModule { }
