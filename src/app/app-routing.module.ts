import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LigaService } from './services/liga.service';

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
    path: 'jornada',
    loadChildren: () => import('./jornada/jornada.module').then( m => m.JornadaPageModule)
  },
  {
    path: 'clasificacion',
    loadChildren: () => import('./clasificacion/clasificacion.module').then( m => m.ClasificacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [LigaService]
})
export class AppRoutingModule { }
