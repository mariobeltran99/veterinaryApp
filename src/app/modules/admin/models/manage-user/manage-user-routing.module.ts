import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ManageUsersComponent } from '../../components/manage-user/manage-users/manage-users.component';


const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule { }
