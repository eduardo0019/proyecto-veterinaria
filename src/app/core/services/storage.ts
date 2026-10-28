import { Injectable } from '@angular/core';
import { Dueno } from '../models/dueno.model';
import { Mascota } from '../models/mascota.model';
import { ICita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly KEY_DUENOS = 'vetcare_duenos';
  private readonly KEY_MASCOTAS = 'vetcare_mascotas';
  private readonly KEY_CITAS = 'vetcare_citas';

  constructor() {
    this.inicializarDatosDemo();
  }

  // DUEÑOS
  getDuenos(): Dueno[] {
    const raw = localStorage.getItem(this.KEY_DUENOS);
    if (!raw) return [];
    return JSON.parse(raw).map((d: any) => new Dueno(d._id, d._nombre, d._telefono, d._email, d.direccion, d.dni));
  }

  guardarDueno(dueno: Dueno): void {
    const lista = this.getDuenos();
    lista.push(dueno);
    localStorage.setItem(this.KEY_DUENOS, JSON.stringify(lista));
  }

  // MASCOTAS
  getMascotas(): Mascota[] {
    const raw = localStorage.getItem(this.KEY_MASCOTAS);
    if (!raw) return [];
    return JSON.parse(raw).map((m: any) => new Mascota(m.id, m.nombre, m.especie, m.raza, m.fechaNacimiento, m.duenoId));
  }

  guardarMascota(mascota: Mascota): void {
    const lista = this.getMascotas();
    lista.push(mascota);
    localStorage.setItem(this.KEY_MASCOTAS, JSON.stringify(lista));
  }

  // CITAS
  getCitas(): ICita[] {
    const raw = localStorage.getItem(this.KEY_CITAS);
    return raw ? JSON.parse(raw) : [];
  }

  guardarCita(cita: ICita): void {
    const lista = this.getCitas();
    lista.push(cita);
    localStorage.setItem(this.KEY_CITAS, JSON.stringify(lista));
  }

  actualizarEstadoCita(citaId: string, nuevoEstado: ICita['estado']): void {
    const lista = this.getCitas();
    const index = lista.findIndex(c => c.id === citaId);
    if (index !== -1) {
      lista[index].estado = nuevoEstado;
      localStorage.setItem(this.KEY_CITAS, JSON.stringify(lista));
    }
  }

  // Carga inicial con datos de prueba
  private inicializarDatosDemo(): void {
    if (!localStorage.getItem(this.KEY_DUENOS)) {
      const demoDueno = new Dueno('D-1', 'Carlos Mendoza', '987654321', 'carlos@mail.com', 'Av. Larco 450', '45879632');
      localStorage.setItem(this.KEY_DUENOS, JSON.stringify([demoDueno]));
    }
    if (!localStorage.getItem(this.KEY_MASCOTAS)) {
      const demoMascota = new Mascota('M-1', 'Firulais', 'Perro', 'Golden Retriever', new Date('2021-04-10'), 'D-1');
      localStorage.setItem(this.KEY_MASCOTAS, JSON.stringify([demoMascota]));
    }
    if (!localStorage.getItem(this.KEY_CITAS)) {
      const demoCita: ICita = {
        id: 'C-1',
        mascotaId: 'M-1',
        duenoId: 'D-1',
        fechaHora: new Date(),
        motivo: 'Vacunación y chequeo general',
        estado: 'PROGRAMADA',
        prioridad: 'ALTA'
      };
      localStorage.setItem(this.KEY_CITAS, JSON.stringify([demoCita]));
    }
  }
}