import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
//--components imports
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ModalSignoutComponent } from './components/modal-signout/modal-signout.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
//--icons imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//--material imports
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
//--zorro imports
import { NzResultModule } from 'ng-zorro-antd/result';


const components = [
  PagenotfoundComponent,
  ModalSignoutComponent,
  ModalDeleteComponent
]

const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatIconModule
]

const zorroComponents = [
  NzResultModule
]

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule,
    ...materialComponents,
    ...zorroComponents
  ]
})
export class CoreModule { }
