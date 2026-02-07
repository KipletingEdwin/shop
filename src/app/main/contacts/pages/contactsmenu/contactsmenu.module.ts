import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsmenuPageRoutingModule } from './contactsmenu-routing.module';

import { ContactsmenuPage } from './contactsmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsmenuPageRoutingModule
  ],
  declarations: [ContactsmenuPage]
})
export class ContactsmenuPageModule {}
