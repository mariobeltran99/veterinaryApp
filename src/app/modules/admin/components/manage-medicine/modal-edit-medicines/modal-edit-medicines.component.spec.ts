import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMedicinesComponent } from './modal-edit-medicines.component';

describe('ModalEditMedicinesComponent', () => {
  let component: ModalEditMedicinesComponent;
  let fixture: ComponentFixture<ModalEditMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
