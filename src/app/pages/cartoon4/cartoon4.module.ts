import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartoon4PageRoutingModule } from './cartoon4-routing.module';

import { Cartoon4Page } from './cartoon4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartoon4PageRoutingModule
  ],
  declarations: [Cartoon4Page]
})
export class Cartoon4PageModule {}
