import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBookingModule } from './modules/e-booking/e-booking.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'one' },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'bookings',
  //   component: BookingsComponent,
  // },
  // {
  //   path: 'configuration',
  //   component: ConfigurationComponent,
  // },

  {
    path: 'one',
    loadChildren: () =>
      import('./modules/e-comm/e-comm.module').then((m) => m.ECommModule),
  },
  {
    path: 'two',
    loadChildren: () =>
      import('./modules/e-booking/e-booking.module').then((m) => m.EBookingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
