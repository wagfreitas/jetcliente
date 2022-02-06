import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideinfoPage } from './rideinfo.page';

const routes: Routes = [
  {
    path: '',
    component: RideinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideinfoPageRoutingModule {}
