import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'homemain',
    loadChildren: () => import('./main/home/pages/homemain/homemain.module').then( m => m.HomemainPageModule)
  },
  {
    path: 'homemenu',
    loadChildren: () => import('./main/home/pages/homemenu/homemenu.module').then( m => m.HomemenuPageModule)
  },
  {
    path: 'aboutmain',
    loadChildren: () => import('./main/about/pages/aboutmain/aboutmain.module').then( m => m.AboutmainPageModule)
  },
  {
    path: 'aboutmenu',
    loadChildren: () => import('./main/about/pages/aboutmenu/aboutmenu.module').then( m => m.AboutmenuPageModule)
  },
  {
    path: 'contactsmain',
    loadChildren: () => import('./main/contacts/pages/contactsmain/contactsmain.module').then( m => m.ContactsmainPageModule)
  },
  {
    path: 'contactsmenu',
    loadChildren: () => import('./main/contacts/pages/contactsmenu/contactsmenu.module').then( m => m.ContactsmenuPageModule)
  },
  {
    path: 'projectsmenu',
    loadChildren: () => import('./main/projects/pages/projectsmenu/projectsmenu.module').then( m => m.ProjectsmenuPageModule)
  },
  {
    path: 'projectsmain',
    loadChildren: () => import('./main/projects/pages/projectsmain/projectsmain.module').then( m => m.ProjectsmainPageModule)
  },
  {
    path: 'servicesmenu',
    loadChildren: () => import('./main/services/pages/servicesmenu/servicesmenu.module').then( m => m.ServicesmenuPageModule)
  },
  {
    path: 'servicesmain',
    loadChildren: () => import('./main/services/pages/servicesmain/servicesmain.module').then( m => m.ServicesmainPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
