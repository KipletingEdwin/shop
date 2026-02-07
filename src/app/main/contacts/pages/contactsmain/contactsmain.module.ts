import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsmainPageRoutingModule } from './contactsmain-routing.module';

import { ContactsmainPage } from './contactsmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsmainPageRoutingModule
  ],
  declarations: [ContactsmainPage]
})
export class ContactsmainPageModule {}
