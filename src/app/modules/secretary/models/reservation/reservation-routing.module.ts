import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyReservationComponent } from '../../components/verify-reservation/verify-reservation.component';


const routes: Routes = [
  {
    path: '',
    component:VerifyReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
