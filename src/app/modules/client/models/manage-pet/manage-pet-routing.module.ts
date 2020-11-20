import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePetComponent } from '../../components/manage-pet/manage-pet.component';


const routes: Routes = [
  {
    path: '',
    component: ManagePetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePetRoutingModule { }
