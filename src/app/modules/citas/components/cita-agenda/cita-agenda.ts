import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../../../../core/services/storage';
import { ICita, EstadoCita } from '../../../../core/models/cita.model';
import { Mascota } from '../../../../core/models/mascota.model';

@Component({
  selector: 'app-cita-agenda',
  standalone: false,
  styleUrl: './cita-agenda.css',
  templateUrl: './cita-agenda.html',
})
export class CitaAgenda implements OnInit {
  @Input() citas: ICita[] = [];
  @Output() citaActualizada = new EventEmitter<ICita>();

  mascotas: Mascota[] = [];

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.mascotas = this.storage.getMascotas();

    if (this.citas.length === 0) {
      this.cargarCitas();
    }
  }

  cargarCitas(): void {
    this.citas = this.storage.getCitas();
  }

  nombreMascota(mascotaId: string): string {
    const mascota = this.mascotas.find(m => m.id === mascotaId);
    return mascota ? mascota.nombre : 'Mascota no encontrada';
  }

  cambiarEstado(cita: ICita, estado: EstadoCita): void {
    this.storage.actualizarEstadoCita(cita.id, estado);
    cita.estado = estado;
    this.citaActualizada.emit(cita);
    this.cargarCitas();
  }
}
