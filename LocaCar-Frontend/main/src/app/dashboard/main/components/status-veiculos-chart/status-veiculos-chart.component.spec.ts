import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVeiculosChartComponent } from './status-veiculos-chart.component';

describe('StatusVeiculosChartComponent', () => {
  let component: StatusVeiculosChartComponent;
  let fixture: ComponentFixture<StatusVeiculosChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusVeiculosChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusVeiculosChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
