import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartoon2PageRoutingModule } from './cartoon2-routing.module';

import { Cartoon2Page } from './cartoon2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartoon2PageRoutingModule
  ],
  declarations: [Cartoon2Page]
})
export class Cartoon2PageModule {}
