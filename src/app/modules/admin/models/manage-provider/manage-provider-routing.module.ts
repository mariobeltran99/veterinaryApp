import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProviderComponent } from '../../components/manage-provider/add-provider/add-provider.component';
import { ManageProvidersComponent } from '../../components/manage-provider/manage-providers/manage-providers.component';
import { ViewProvidersComponent } from '../../components/manage-provider/view-providers/view-providers.component';


const routes: Routes = [
  {
    path: '',
    component: ManageProvidersComponent
  },
  {
    path:'add-provider',
    component: AddProviderComponent
  },
  {
    path:'view-providers',
    component: ViewProvidersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProviderRoutingModule { }
