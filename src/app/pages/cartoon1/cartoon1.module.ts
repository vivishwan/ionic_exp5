import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartoon1PageRoutingModule } from './cartoon1-routing.module';

import { Cartoon1Page } from './cartoon1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartoon1PageRoutingModule
  ],
  declarations: [Cartoon1Page]
})
export class Cartoon1PageModule {}
