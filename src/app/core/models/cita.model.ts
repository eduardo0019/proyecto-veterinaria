export type EstadoCita = 'PROGRAMADA' | 'EN_ATENCION' | 'COMPLETADA' | 'CANCELADA';
export type PrioridadCita = 'BAJA' | 'MEDIA' | 'ALTA' | 'EMERGENCIA';

export interface ICita {
  id: string;
  mascotaId: string;
  duenoId: string;
  fechaHora: Date;
  motivo: string;
  estado: EstadoCita;
  prioridad: PrioridadCita;
}