import { Persona } from './persona.model';

export class Dueno extends Persona {
  constructor(
    id: string,
    nombre: string,
    telefono: string,
    email: string,
    public direccion: string,
    public dni: string
  ) {
    super(id, nombre, telefono, email);
  }

  public override obtenerResumenContacto(): string {
    return `${this.nombre} (DNI: ${this.dni}) - Tel: ${this.telefono}`;
  }
}