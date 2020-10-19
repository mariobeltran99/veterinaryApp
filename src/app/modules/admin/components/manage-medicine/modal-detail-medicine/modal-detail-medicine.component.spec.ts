import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailMedicineComponent } from './modal-detail-medicine.component';

describe('ModalDetailMedicineComponent', () => {
  let component: ModalDetailMedicineComponent;
  let fixture: ComponentFixture<ModalDetailMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
