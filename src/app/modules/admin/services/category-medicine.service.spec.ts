import { TestBed } from '@angular/core/testing';

import { CategoryMedicineService } from './category-medicine.service';

describe('CategoryMedicineService', () => {
  let service: CategoryMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
