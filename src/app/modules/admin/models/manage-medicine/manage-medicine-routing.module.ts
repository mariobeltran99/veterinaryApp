import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryMedicineComponent } from '../../components/manage-medicine/add-category-medicine/add-category-medicine.component';
import { AddMedicineComponent } from '../../components/manage-medicine/add-medicine/add-medicine.component';
import { ManageMedicinesComponent } from '../../components/manage-medicine/manage-medicines/manage-medicines.component';
import { ViewCategoryMedicinesComponent } from '../../components/manage-medicine/view-category-medicines/view-category-medicines.component';
import { ViewMedicinesComponent } from '../../components/manage-medicine/view-medicines/view-medicines.component';


const routes: Routes = [
  {
    path:'',
    component:ManageMedicinesComponent
  },
  {
    path:'add-medicine',
    component:AddMedicineComponent
  },
  {
    path:'view-medicines',
    component:ViewMedicinesComponent
  },
  {
    path:'add-category-medicine',
    component: AddCategoryMedicineComponent
  },
  {
    path: 'view-category-medicines',
    component: ViewCategoryMedicinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMedicineRoutingModule { }
