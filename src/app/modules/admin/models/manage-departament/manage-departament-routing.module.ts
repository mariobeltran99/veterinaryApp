import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDepartamentsComponent } from '../../components/manage-departament/manage-departaments/manage-departaments.component';


const routes: Routes = [
  {
    path:'',
    component:ManageDepartamentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageDepartamentRoutingModule { }
