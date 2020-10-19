import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ViewsecretaryComponent } from './components/viewsecretary/viewsecretary.component';


const routes: Routes = [
  {
    path:'',
    component: ViewsecretaryComponent,
    children:[
      {
        path:'manage-messages',
        loadChildren: () => import('../admin/models/manage-message/manage-message.module').then(m => m.ManageMessageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
