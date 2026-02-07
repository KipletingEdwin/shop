import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesmainPage } from './servicesmain.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesmainPageRoutingModule {}
