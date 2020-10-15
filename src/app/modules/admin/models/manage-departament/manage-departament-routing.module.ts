import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from '../../components/manage-departament/add-department/add-department.component';
import { ManageDepartamentsComponent } from '../../components/manage-departament/manage-departaments/manage-departaments.component';
import { ViewDepartmentsComponent } from '../../components/manage-departament/view-departments/view-departments.component';


const routes: Routes = [
  {
    path:'',
    component:ManageDepartamentsComponent
  },
  {
    path:'add-departments',
    component:AddDepartmentComponent
  },
  {
    path:'view-departments',
    component:ViewDepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageDepartamentRoutingModule { }
