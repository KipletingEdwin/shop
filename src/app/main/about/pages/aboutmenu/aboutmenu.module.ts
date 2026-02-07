import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutmenuPageRoutingModule } from './aboutmenu-routing.module';

import { AboutmenuPage } from './aboutmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutmenuPageRoutingModule
  ],
  declarations: [AboutmenuPage]
})
export class AboutmenuPageModule {}
