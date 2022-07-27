import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesLocacaoComponent } from './solicitacoes-locacao.component';

describe('SolicitacoesLocacaoComponent', () => {
  let component: SolicitacoesLocacaoComponent;
  let fixture: ComponentFixture<SolicitacoesLocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesLocacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
