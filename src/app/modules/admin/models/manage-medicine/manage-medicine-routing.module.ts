import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageMedicinesComponent } from '../../components/manage-medicine/manage-medicines/manage-medicines.component';


const routes: Routes = [
  {
    path:'',
    component:ManageMedicinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMedicineRoutingModule { }
