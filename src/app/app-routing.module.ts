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
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'rating/:id',
    loadChildren: () => import('./rating2/rating2.module').then( m => m.Rating2PageModule)
  },
  {
    path: 'rating/:id/:id',
    loadChildren: () => import('./rating3/rating3.module').then( m => m.Rating3PageModule)
  },
  {
    path: 'tollfare',
    loadChildren: () => import('./tollfare/tollfare.module').then( m => m.TollfarePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
