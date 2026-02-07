import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesmenuPageRoutingModule } from './servicesmenu-routing.module';

import { ServicesmenuPage } from './servicesmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesmenuPageRoutingModule
  ],
  declarations: [ServicesmenuPage]
})
export class ServicesmenuPageModule {}
