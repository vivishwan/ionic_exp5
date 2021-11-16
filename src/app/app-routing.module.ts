import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alpha',
    loadChildren: () => import('./pages/alpha/alpha.module').then( m => m.AlphaPageModule)
  },
  {
    path: 'cartoon',
    loadChildren: () => import('./pages/cartoon/cartoon.module').then( m => m.CartoonPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('./pages/shapes/shapes.module').then( m => m.ShapesPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./pages/numbers/numbers.module').then( m => m.NumbersPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'cartoon1',
    loadChildren: () => import('./pages/cartoon1/cartoon1.module').then( m => m.Cartoon1PageModule)
  },
  {
    path: 'cartoon2',
    loadChildren: () => import('./pages/cartoon2/cartoon2.module').then( m => m.Cartoon2PageModule)
  },
  {
    path: 'cartoon3',
    loadChildren: () => import('./pages/cartoon3/cartoon3.module').then( m => m.Cartoon3PageModule)
  },
  {
    path: 'cartoon4',
    loadChildren: () => import('./pages/cartoon4/cartoon4.module').then( m => m.Cartoon4PageModule)
  },
  {
    path: 'splash1',
    loadChildren: () => import('./splash1/splash1.module').then( m => m.Splash1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
