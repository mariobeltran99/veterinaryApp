import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProvidersComponent } from '../../components/manage-provider/manage-providers/manage-providers.component';


const routes: Routes = [
  {
    path: '',
    component: ManageProvidersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProviderRoutingModule { }
