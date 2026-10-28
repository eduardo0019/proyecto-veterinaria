export class Cita {
  id?: number
  mascotaId!: number
  fecha!: string
  hora!: string
  motivo!: string
  prioridad!: 'BAJA' | 'MEDIA' | 'ALTA' | 'EMERGENCIA'
  estado!: 'PROGRAMADA' | 'EN_ATENCION' | 'COMPLETADA' | 'CANCELADA'
}
