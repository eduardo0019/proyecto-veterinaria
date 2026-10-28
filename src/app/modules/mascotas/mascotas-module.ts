import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MascotasRoutingModule } from './mascotas-routing-module';
import { MascotaForm } from './components/mascota-form/mascota-form';
import { MascotaList } from './components/mascota-list/mascota-list';

@NgModule({
  declarations: [MascotaForm, MascotaList],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MascotasRoutingModule,
  ],
})
export class MascotasModule {}