
import { Pipe, PipeTransform } from '@angular/core';
import { EstadoCita } from '../../core/models/cita.model';

@Pipe({
  name: 'estadoCita',
  standalone: false
})
export class EstadoCitaPipe implements PipeTransform {
  transform(value: EstadoCita): string {
    const diccionario: Record<EstadoCita, string> = {
      PROGRAMADA: 'bg-primary',
      EN_ATENCION: 'bg-warning text-dark',
      COMPLETADA: 'bg-success',
      CANCELADA: 'bg-danger'
    };

    return diccionario[value] || 'bg-secondary';
  }
}
