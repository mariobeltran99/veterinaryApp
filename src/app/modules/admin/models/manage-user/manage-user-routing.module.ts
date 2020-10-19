import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ManageUsersComponent } from '../../components/manage-user/manage-users/manage-users.component';
import { AddUserComponent } from '../../components/manage-user/add-user/add-user.component';
import { ViewUsersClientsComponent } from '../../components/manage-user/view-users-clients/view-users-clients.component';
import { ViewUsersComponent } from '../../components/manage-user/view-users/view-users.component';

const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'view-users',
    component: ViewUsersComponent,
  },
  {
    path: 'view-users-clients',
    component: ViewUsersClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageUserRoutingModule {}
