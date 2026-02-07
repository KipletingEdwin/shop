import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsmainPage } from './contactsmain.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsmainPageRoutingModule {}
