import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartoon3Page } from './cartoon3.page';

const routes: Routes = [
  {
    path: '',
    component: Cartoon3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartoon3PageRoutingModule {}
