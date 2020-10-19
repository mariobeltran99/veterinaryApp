import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryMedicinesComponent } from './view-category-medicines.component';

describe('ViewCategoryMedicinesComponent', () => {
  let component: ViewCategoryMedicinesComponent;
  let fixture: ComponentFixture<ViewCategoryMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
