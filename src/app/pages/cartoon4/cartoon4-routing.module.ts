import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartoon4Page } from './cartoon4.page';

const routes: Routes = [
  {
    path: '',
    component: Cartoon4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartoon4PageRoutingModule {}
