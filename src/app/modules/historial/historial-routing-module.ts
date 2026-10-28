import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialDetalle } from './components/historial-detalle/historial-detalle';

const routes: Routes = [
  { path: '', component: HistorialDetalle }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }