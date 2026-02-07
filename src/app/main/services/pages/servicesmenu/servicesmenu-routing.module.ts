import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesmenuPage } from './servicesmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesmenuPageRoutingModule {}
