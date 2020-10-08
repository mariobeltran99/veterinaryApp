import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//--components imports
import { ViewgrocerComponent } from './components/viewgrocer/viewgrocer.component';


const routes: Routes = [
  {
    path: '',
    component: ViewgrocerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrocerRoutingModule { }
