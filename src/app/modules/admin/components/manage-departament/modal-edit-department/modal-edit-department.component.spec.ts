import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDepartmentComponent } from './modal-edit-department.component';

describe('ModalEditDepartmentComponent', () => {
  let component: ModalEditDepartmentComponent;
  let fixture: ComponentFixture<ModalEditDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
