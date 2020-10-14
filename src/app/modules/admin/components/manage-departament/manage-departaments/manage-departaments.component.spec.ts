import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDepartamentsComponent } from './manage-departaments.component';

describe('ManageDepartamentsComponent', () => {
  let component: ManageDepartamentsComponent;
  let fixture: ComponentFixture<ManageDepartamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDepartamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
