import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailUserComponent } from './modal-detail-user.component';

describe('ModalDetailUserComponent', () => {
  let component: ModalDetailUserComponent;
  let fixture: ComponentFixture<ModalDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
