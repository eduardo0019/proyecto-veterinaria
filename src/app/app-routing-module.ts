import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { 
    path: 'mascotas', 
    loadChildren: () => import('./modules/mascotas/mascotas-module').then(m => m.MascotasModule) 
  },
  { 
    path: 'citas', 
    loadChildren: () => import('./modules/citas/citas-module').then(m => m.CitasModule) 
  },
  { 
    path: 'historial', 
    loadChildren: () => import('./modules/historial/historial-module').then(m => m.HistorialModule) 
  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }