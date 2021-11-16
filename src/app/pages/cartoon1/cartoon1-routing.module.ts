import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartoon1Page } from './cartoon1.page';

const routes: Routes = [
  {
    path: '',
    component: Cartoon1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartoon1PageRoutingModule {}
