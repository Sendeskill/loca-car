import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosDisponiveisComponent } from './veiculos-disponiveis.component';

describe('VeiculosDisponiveisComponent', () => {
  let component: VeiculosDisponiveisComponent;
  let fixture: ComponentFixture<VeiculosDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosDisponiveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
