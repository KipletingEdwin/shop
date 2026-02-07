import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutmainPageRoutingModule } from './aboutmain-routing.module';

import { AboutmainPage } from './aboutmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutmainPageRoutingModule
  ],
  declarations: [AboutmainPage]
})
export class AboutmainPageModule {}
