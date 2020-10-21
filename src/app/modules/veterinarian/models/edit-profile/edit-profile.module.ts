import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from '../../components/edit-profile/edit-profile.component';

const components = [
  EditProfileComponent
]

const materialComponents = [

]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    materialComponents
  ]
})
export class EditProfileModule { }
