import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

//--components imports
import { ViewadminComponent } from './components/viewadmin/viewadmin.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { ManageHomeComponent } from './components/manage-home/manage-home.component';

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
  ViewadminComponent,
  NavbarAdminComponent,
  ManageHomeComponent
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
    AdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...materialComponents
    
  ]
})
export class AdminModule { }
