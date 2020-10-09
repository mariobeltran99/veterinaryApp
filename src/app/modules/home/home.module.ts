import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

//--components imports
import { HomeComponent } from './components/home/home.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentComponent } from './components/content/content.component';
import { Departament1Component } from './components/departament1/departament1.component';
import { Departament2Component } from './components/departament2/departament2.component';
import { Departament3Component } from './components/departament3/departament3.component';
import { Departament4Component } from './components/departament4/departament4.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicePoliciesComponent } from './components/service-policies/service-policies.component';
import { PrivacyPoliciesComponent } from './components/privacy-policies/privacy-policies.component';

//--icons imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

//--ngZorro imports
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

//--others imports
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  HomeComponent,
  LicensesComponent,
  NavbarComponent,
  SliderComponent,
  ContactformComponent,
  ContentComponent,
  Departament1Component,
  Departament2Component,
  Departament3Component,
  Departament4Component,
  FooterComponent,
  ServicePoliciesComponent,
  PrivacyPoliciesComponent
]
const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule
]
const zorroComponents = [
  NzPageHeaderModule,
  NzMenuModule,
  NzIconModule,
  NzLayoutModule,
  NzCarouselModule,
  NzGridModule,
  NzCardModule,
  NzNotificationModule,
  NzPopoverModule,
  NzBackTopModule
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ],
})
export class HomeModule { }
