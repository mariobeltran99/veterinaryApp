import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalsComponent } from '../../components/manage-animal/add-animals/add-animals.component';
import { ManageAnimalsComponent } from '../../components/manage-animal/manage-animals/manage-animals.component';
import { ViewAnimalsComponent } from '../../components/manage-animal/view-animals/view-animals.component';


const routes: Routes = [
  {
    path:'',
    component:ManageAnimalsComponent
  },
  {
    path: 'add-animals',
    component: AddAnimalsComponent
  },
  {
    path: 'view-animals',
    component:ViewAnimalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAnimalRoutingModule { }
