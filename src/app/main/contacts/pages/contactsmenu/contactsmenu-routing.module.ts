import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsmenuPage } from './contactsmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsmenuPageRoutingModule {}
