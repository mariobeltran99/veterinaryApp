import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDisabledComponent } from './modal-edit-disabled.component';

describe('ModalEditDisabledComponent', () => {
  let component: ModalEditDisabledComponent;
  let fixture: ComponentFixture<ModalEditDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
