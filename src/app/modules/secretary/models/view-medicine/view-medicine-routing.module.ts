import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicinesComponent } from '../../components/medicines/medicines.component';


const routes: Routes = [
  {
    path:'',
    component: MedicinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMedicineRoutingModule { }
