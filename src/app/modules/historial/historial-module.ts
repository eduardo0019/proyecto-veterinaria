import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HistorialRoutingModule } from './historial-routing-module';
import { HistorialDetalle } from './components/historial-detalle/historial-detalle';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [
    HistorialDetalle
  ],
  imports: [
    CommonModule,
    FormsModule,
    HistorialRoutingModule,
    SharedModule
  ]
})
export class HistorialModule { }