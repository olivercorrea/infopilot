import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspesamientoComponent } from './espesamiento.component';

describe('EspesamientoComponent', () => {
  let component: EspesamientoComponent;
  let fixture: ComponentFixture<EspesamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspesamientoComponent]
    });
    fixture = TestBed.createComponent(EspesamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
