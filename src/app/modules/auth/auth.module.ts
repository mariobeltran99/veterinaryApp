import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

//--components imports
import { ViewloginComponent } from './components/login/viewlogin/viewlogin.component';
import { NavbarLoginComponent } from './components/login/navbar-login/navbar-login.component';
import { TabsLoginComponent } from './components/login/tabs-login/tabs-login.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ForgotComponent } from './components/forgot/forgot.component';

//-- icons imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//-- others imports
import { ReactiveFormsModule } from '@angular/forms';

//-- material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';

//-- zorro imports
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';


const components = [
  ViewloginComponent,
  NavbarLoginComponent,
  TabsLoginComponent,
  VerifyComponent,
  ForgotComponent,
]

const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatStepperModule
]

const zorroComponents = [
  NzNotificationModule,
  NzIconModule
]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class AuthModule { }
