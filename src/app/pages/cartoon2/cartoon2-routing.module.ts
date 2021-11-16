import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartoon2Page } from './cartoon2.page';

const routes: Routes = [
  {
    path: '',
    component: Cartoon2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartoon2PageRoutingModule {}
