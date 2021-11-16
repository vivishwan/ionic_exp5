import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartoon3PageRoutingModule } from './cartoon3-routing.module';

import { Cartoon3Page } from './cartoon3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartoon3PageRoutingModule
  ],
  declarations: [Cartoon3Page]
})
export class Cartoon3PageModule {}
