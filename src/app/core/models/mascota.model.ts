export type EspecieMascota = 'Perro' | 'Gato' | 'Ave' | 'Exótico';

export interface IMascota {
  id: string;
  nombre: string;
  especie: EspecieMascota;
  raza: string;
  fechaNacimiento: Date;
  duenoId: string;
  calcularEdad(): number;
}

export class Mascota implements IMascota {
  constructor(
    public id: string,
    public nombre: string,
    public especie: EspecieMascota,
    public raza: string,
    public fechaNacimiento: Date,
    public duenoId: string
  ) {}

  public calcularEdad(): number {
    const diff = Date.now() - new Date(this.fechaNacimiento).getTime();
    const diffDate = new Date(diff);
    return Math.abs(diffDate.getUTCFullYear() - 1970);
  }
}