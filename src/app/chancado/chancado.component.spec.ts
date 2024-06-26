import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChancadoComponent } from './chancado.component';

describe('ChancadoComponent', () => {
  let component: ChancadoComponent;
  let fixture: ComponentFixture<ChancadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChancadoComponent]
    });
    fixture = TestBed.createComponent(ChancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
