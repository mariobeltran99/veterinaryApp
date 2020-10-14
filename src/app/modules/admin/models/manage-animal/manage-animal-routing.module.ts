import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAnimalsComponent } from '../../components/manage-animal/manage-animals/manage-animals.component';


const routes: Routes = [
  {
    path:'',
    component:ManageAnimalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAnimalRoutingModule { }
