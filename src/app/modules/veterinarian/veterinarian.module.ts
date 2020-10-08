import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarianRoutingModule } from './veterinarian-routing.module';

//--components imports
import { ViewveterinarianComponent } from './components/viewveterinarian/viewveterinarian.component';
import { NavbarVeterinarianComponent } from './components/navbar-veterinarian/navbar-veterinarian.component';

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
  ViewveterinarianComponent,
  NavbarVeterinarianComponent
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
    VeterinarianRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...materialComponents
  ]
})
export class VeterinarianModule { }
