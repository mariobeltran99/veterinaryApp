import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewveterinarianComponent } from './components/viewveterinarian/viewveterinarian.component';



const routes: Routes = [
  {
    path:'',
    component: ViewveterinarianComponent,
    children: [
      { 
        path: 'edit-profile', 
        loadChildren: () => import('./models/edit-profile/edit-profile.module').then(m => m.EditProfileModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinarianRoutingModule { }
