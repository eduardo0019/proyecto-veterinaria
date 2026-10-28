import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../core/services/storage';
import { Mascota } from '../../../../core/models/mascota.model';
import { Dueno } from '../../../../core/models/dueno.model';
import { ICita } from '../../../../core/models/cita.model';

@Component({
  selector: 'app-historial-detalle',
  standalone: false,
  templateUrl: './historial-detalle.html',
  styleUrl: './historial-detalle.css'
})
export class HistorialDetalle implements OnInit {
  mascotas: Mascota[] = [];
  mascotaSeleccionadaId: string = '';
  
  mascotaActual: Mascota | null = null;
  duenoActual: Dueno | null = null;
  citasMascota: ICita[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.mascotas = this.storageService.getMascotas();
    if (this.mascotas.length > 0) {
      // Selecciona la primera por defecto para previsualizar datos
      this.seleccionarMascota(this.mascotas[0].id);
    }
  }

  onMascotaChange(): void {
    this.seleccionarMascota(this.mascotaSeleccionadaId);
  }

  seleccionarMascota(id: string): void {
    this.mascotaSeleccionadaId = id;
    this.mascotaActual = this.mascotas.find(m => m.id === id) || null;

    if (this.mascotaActual) {
      const duenos = this.storageService.getDuenos();
      this.duenoActual = duenos.find(d => d.id === this.mascotaActual?.duenoId) || null;

      // Filtrar todas las citas asociadas a esta mascota
      const todasLasCitas = this.storageService.getCitas();
      this.citasMascota = todasLasCitas.filter(c => c.mascotaId === this.mascotaActual?.id);
    }
  }
}