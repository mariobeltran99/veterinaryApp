import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryProductComponent } from './view-category-product.component';

describe('ViewCategoryProductComponent', () => {
  let component: ViewCategoryProductComponent;
  let fixture: ComponentFixture<ViewCategoryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
