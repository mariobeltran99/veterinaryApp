import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloginComponent } from './viewlogin.component';

describe('ViewloginComponent', () => {
  let component: ViewloginComponent;
  let fixture: ComponentFixture<ViewloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
