import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSignoutComponent } from './modal-signout.component';

describe('ModalSignoutComponent', () => {
  let component: ModalSignoutComponent;
  let fixture: ComponentFixture<ModalSignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSignoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
