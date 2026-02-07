import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsmainPageRoutingModule } from './projectsmain-routing.module';

import { ProjectsmainPage } from './projectsmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsmainPageRoutingModule
  ],
  declarations: [ProjectsmainPage]
})
export class ProjectsmainPageModule {}
