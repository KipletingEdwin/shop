import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesmainPageRoutingModule } from './servicesmain-routing.module';

import { ServicesmainPage } from './servicesmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesmainPageRoutingModule
  ],
  declarations: [ServicesmainPage]
})
export class ServicesmainPageModule {}
