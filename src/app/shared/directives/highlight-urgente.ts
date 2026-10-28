
import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { PrioridadCita } from '../../core/models/cita.model';

@Directive({
  selector: '[appHighlightUrgente]',
  standalone: false
})
export class HighlightUrgenteDirective implements OnChanges {
  @Input('appHighlightUrgente') prioridad!: PrioridadCita;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.renderer.removeClass(this.el.nativeElement, 'table-danger');
    this.renderer.removeClass(this.el.nativeElement, 'table-warning');
    this.renderer.removeStyle(this.el.nativeElement, 'border-left');
    this.renderer.removeStyle(this.el.nativeElement, 'font-weight');

    if (this.prioridad === 'EMERGENCIA') {
      this.renderer.addClass(this.el.nativeElement, 'table-danger');
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid #dc3545');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else if (this.prioridad === 'ALTA') {
      this.renderer.addClass(this.el.nativeElement, 'table-warning');
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid #ffc107');
    }
  }
}
