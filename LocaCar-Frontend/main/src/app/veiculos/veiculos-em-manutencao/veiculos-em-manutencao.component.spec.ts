import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosEmManutencaoComponent } from './veiculos-em-manutencao.component';

describe('VeiculosEmManutencaoComponent', () => {
  let component: VeiculosEmManutencaoComponent;
  let fixture: ComponentFixture<VeiculosEmManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosEmManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosEmManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
