import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared-module';
import { Inicio } from './pages/inicio/inicio';

@NgModule({
  declarations: [App, Inicio],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, // <-- Importar aquí
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
