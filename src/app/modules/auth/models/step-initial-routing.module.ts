import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepsInitialComponent } from '../components/steps-initial/steps-initial.component';


const routes: Routes = [
  {
    path: '',
    component: StepsInitialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepInitialRoutingModule { }
