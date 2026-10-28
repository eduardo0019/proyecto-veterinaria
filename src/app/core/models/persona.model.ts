export abstract class Persona {
  constructor(
    private _id: string,
    private _nombre: string,
    private _telefono: string,
    private _email: string
  ) {}

  public get id(): string { return this._id; }
  public get nombre(): string { return this._nombre; }
  public get telefono(): string { return this._telefono; }
  public get email(): string { return this._email; }

  public set telefono(value: string) {
    if (value.length < 9) throw new Error('Teléfono inválido');
    this._telefono = value;
  }

  public abstract obtenerResumenContacto(): string;
}