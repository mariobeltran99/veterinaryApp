import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepInitialRoutingModule } from './step-initial-routing.module';

//-- components imports
import { StepsInitialComponent } from '../components/steps-initial/steps-initial.component';


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
  StepsInitialComponent
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
    StepInitialRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class StepInitialModule { }
