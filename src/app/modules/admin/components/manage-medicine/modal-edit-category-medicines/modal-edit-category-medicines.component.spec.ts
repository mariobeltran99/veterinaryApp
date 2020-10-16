import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCategoryMedicinesComponent } from './modal-edit-category-medicines.component';

describe('ModalEditCategoryMedicinesComponent', () => {
  let component: ModalEditCategoryMedicinesComponent;
  let fixture: ComponentFixture<ModalEditCategoryMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditCategoryMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditCategoryMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
