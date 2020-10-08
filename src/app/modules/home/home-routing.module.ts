import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//views
import { HomeComponent } from './components/home/home.component';
import { LicensesComponent } from './components/licenses/licenses.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'licenses',
    component: LicensesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
