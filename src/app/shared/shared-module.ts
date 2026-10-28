import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HighlightUrgenteDirective } from './directives/highlight-urgente';
import { EstadoCitaPipe } from './pipes/estado-cita-pipe';
import { Navbar } from './components/navbar/navbar';

@NgModule({
  declarations: [
    HighlightUrgenteDirective,
    EstadoCitaPipe,
    Navbar
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HighlightUrgenteDirective,
    EstadoCitaPipe,
    Navbar
  ]
})
export class SharedModule { }