import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmenuPage } from './aboutmenu.page';

const routes: Routes = [
  {
    path: '',
    component: AboutmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutmenuPageRoutingModule {}
