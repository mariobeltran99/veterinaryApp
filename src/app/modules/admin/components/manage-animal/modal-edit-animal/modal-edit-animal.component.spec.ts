import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAnimalComponent } from './modal-edit-animal.component';

describe('ModalEditAnimalComponent', () => {
  let component: ModalEditAnimalComponent;
  let fixture: ComponentFixture<ModalEditAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
