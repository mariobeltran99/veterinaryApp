import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewclientComponent } from './components/viewclient/viewclient.component';


const routes: Routes = [
  {
    path: '',
    component: ViewclientComponent,
    children:[
      {
        path:'manage-pets',
        loadChildren: () => import('./models/manage-pet/manage-pet.module').then(m => m.ManagePetModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
