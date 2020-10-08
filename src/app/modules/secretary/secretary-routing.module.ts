import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ViewsecretaryComponent } from './components/viewsecretary/viewsecretary.component';


const routes: Routes = [
  {
    path:'',
    component: ViewsecretaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
