import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserRoutingModule } from './manage-user-routing.module';

//--components imports
import { ManageUsersComponent } from '../../components/manage-user/manage-users/manage-users.component';

//--material imports



const components = [
  ManageUsersComponent
]

const materialComponents = [

]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    ...materialComponents
  ]
})
export class ManageUserModule { }
