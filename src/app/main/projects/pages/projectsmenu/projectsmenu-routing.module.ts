import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsmenuPage } from './projectsmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsmenuPageRoutingModule {}
