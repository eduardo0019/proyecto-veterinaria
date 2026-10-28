import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MascotaList } from './components/mascota-list/mascota-list';
import { MascotaForm } from './components/mascota-form/mascota-form';

const routes: Routes = [
  { path: '', component: MascotaList },       // /mascotas
  { path: 'nuevo', component: MascotaForm },  // /mascotas/nuevo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasRoutingModule {}