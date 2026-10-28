import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Dueno } from '../../../../core/models/dueno.model';
import { Mascota, EspecieMascota } from '../../../../core/models/mascota.model';
import { StorageService } from '../../../../core/services/storage';

@Component({
  selector: 'app-mascota-form',
  standalone: false,
  styleUrl: './mascota-form.css',
  templateUrl: './mascota-form.html',
})
export class MascotaForm {
  form: FormGroup;
  guardado = false;
  especies: EspecieMascota[] = ['Perro', 'Gato', 'Ave', 'Exótico'];

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      mascota: this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        especie: ['', Validators.required],
        raza: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
      }),
      dueno: this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        telefono: ['', [Validators.required, Validators.pattern(/^\d{9,}$/)]],
        email: ['', [Validators.required, Validators.email]],
        direccion: ['', [Validators.required, Validators.minLength(5)]],
      }),
    });
  }

  // true si el campo es inválido y el usuario ya interactuó con él
  esInvalido(ruta: string): boolean {
    const c = this.form.get(ruta);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const d = this.form.value.dueno;
    const m = this.form.value.mascota;

    // POO: se instancian las clases del modelo
    const dueno = new Dueno(
      crypto.randomUUID(), d.nombre, d.telefono, d.email, d.direccion, d.dni,
    );
    const mascota = new Mascota(
      crypto.randomUUID(),
      m.nombre,
      m.especie as EspecieMascota,
      m.raza,
      new Date(m.fechaNacimiento + 'T00:00:00'),
      dueno.id, // la mascota se enlaza al dueño por su id
    );

    this.storage.guardarDueno(dueno);
    this.storage.guardarMascota(mascota);

    this.guardado = true;
    this.form.reset();
    setTimeout(() => this.router.navigate(['/mascotas']), 1000);
  }

  cancelar(): void {
    this.router.navigate(['/mascotas']);
  }
}