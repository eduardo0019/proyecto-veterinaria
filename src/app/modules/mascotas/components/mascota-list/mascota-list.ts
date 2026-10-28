import { Component, OnInit } from '@angular/core';

import { Dueno } from '../../../../core/models/dueno.model';
import { Mascota } from '../../../../core/models/mascota.model';
import { StorageService } from '../../../../core/services/storage';

@Component({
  selector: 'app-mascota-list',
  standalone: false,
  styleUrl: './mascota-list.css',
  templateUrl: './mascota-list.html',
})
export class MascotaList implements OnInit {
  mascotas: Mascota[] = [];
  private duenos: Dueno[] = [];

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.mascotas = this.storage.getMascotas();
    this.duenos = this.storage.getDuenos();
  }

  // Busca al dueño de una mascota usando su duenoId
  obtenerDueno(duenoId: string): Dueno | undefined {
    return this.duenos.find((d) => d.id === duenoId);
  }
}