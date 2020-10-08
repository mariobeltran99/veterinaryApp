import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProviderRoutingModule } from './manage-provider-routing.module';


//--components imports
import { ManageProvidersComponent } from '../../components/manage-provider/manage-providers/manage-providers.component';

const components = [
  ManageProvidersComponent
]

const materialComponents = [

]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ManageProviderRoutingModule,
    ...materialComponents
  ]
})
export class ManageProviderModule { }
