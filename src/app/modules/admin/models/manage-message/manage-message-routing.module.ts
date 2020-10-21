import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageMessagesComponent } from '../../components/manage-message/manage-messages/manage-messages.component';


const routes: Routes = [
  {
    path: '',
    component:ManageMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMessageRoutingModule { }
