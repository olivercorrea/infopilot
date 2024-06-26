import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotacionComponent } from './flotacion.component';

describe('FlotacionComponent', () => {
  let component: FlotacionComponent;
  let fixture: ComponentFixture<FlotacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlotacionComponent]
    });
    fixture = TestBed.createComponent(FlotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
