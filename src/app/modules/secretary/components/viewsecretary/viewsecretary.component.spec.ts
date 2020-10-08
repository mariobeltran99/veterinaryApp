import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsecretaryComponent } from './viewsecretary.component';

describe('ViewsecretaryComponent', () => {
  let component: ViewsecretaryComponent;
  let fixture: ComponentFixture<ViewsecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
