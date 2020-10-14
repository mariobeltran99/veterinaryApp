import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAnimalsComponent } from './manage-animals.component';

describe('ManageAnimalsComponent', () => {
  let component: ManageAnimalsComponent;
  let fixture: ComponentFixture<ManageAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
