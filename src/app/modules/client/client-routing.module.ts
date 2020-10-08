import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewclientComponent } from './components/viewclient/viewclient.component';


const routes: Routes = [
  {
    path: '',
    component: ViewclientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
