import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoliendaComponent } from './molienda.component';

describe('MoliendaComponent', () => {
  let component: MoliendaComponent;
  let fixture: ComponentFixture<MoliendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoliendaComponent]
    });
    fixture = TestBed.createComponent(MoliendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
