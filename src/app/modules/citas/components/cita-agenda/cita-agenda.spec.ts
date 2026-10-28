import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitaAgenda } from './cita-agenda';

describe('CitaAgenda', () => {
  let component: CitaAgenda;
  let fixture: ComponentFixture<CitaAgenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitaAgenda],
    }).compileComponents();

    fixture = TestBed.createComponent(CitaAgenda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
