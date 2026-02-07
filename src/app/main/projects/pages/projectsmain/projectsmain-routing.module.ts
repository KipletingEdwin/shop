import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsmainPage } from './projectsmain.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsmainPageRoutingModule {}
