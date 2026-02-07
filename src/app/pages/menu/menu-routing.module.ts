import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'home',
    loadChildren: () => import('../../main/home/pages/homemain/homemain.module').then( m => m.HomemainPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../../main/about/pages/aboutmain/aboutmain.module').then( m => m.AboutmainPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('../../main/projects/pages/projectsmain/projectsmain.module').then( m => m.ProjectsmainPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('../../main/services/pages/servicesmain/servicesmain.module').then( m => m.ServicesmainPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('../../main/contacts/pages/contactsmain/contactsmain.module').then( m => m.ContactsmainPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
