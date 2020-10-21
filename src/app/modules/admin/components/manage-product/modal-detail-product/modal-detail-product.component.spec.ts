import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailProductComponent } from './modal-detail-product.component';

describe('ModalDetailProductComponent', () => {
  let component: ModalDetailProductComponent;
  let fixture: ComponentFixture<ModalDetailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
