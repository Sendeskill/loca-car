import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoVeiculoFormComponent } from './locacao-veiculo-form.component';

describe('LocacaoVeiculoFormComponent', () => {
  let component: LocacaoVeiculoFormComponent;
  let fixture: ComponentFixture<LocacaoVeiculoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoVeiculoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoVeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
