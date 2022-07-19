import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Dashboard3Component } from './dashboard3.component';

describe('Dashboard3Component', () => {
  let component: Dashboard3Component;
  let fixture: ComponentFixture<Dashboard3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboard3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
