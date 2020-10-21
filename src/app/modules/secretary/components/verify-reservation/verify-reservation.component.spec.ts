import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyReservationComponent } from './verify-reservation.component';

describe('VerifyReservationComponent', () => {
  let component: VerifyReservationComponent;
  let fixture: ComponentFixture<VerifyReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
