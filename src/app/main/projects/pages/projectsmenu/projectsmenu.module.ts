import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsmenuPageRoutingModule } from './projectsmenu-routing.module';

import { ProjectsmenuPage } from './projectsmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsmenuPageRoutingModule
  ],
  declarations: [ProjectsmenuPage]
})
export class ProjectsmenuPageModule {}
