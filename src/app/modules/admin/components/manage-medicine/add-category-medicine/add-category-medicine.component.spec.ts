import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryMedicineComponent } from './add-category-medicine.component';

describe('AddCategoryMedicineComponent', () => {
  let component: AddCategoryMedicineComponent;
  let fixture: ComponentFixture<AddCategoryMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
