import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminComponent } from './viewadmin.component';

describe('ViewadminComponent', () => {
  let component: ViewadminComponent;
  let fixture: ComponentFixture<ViewadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
