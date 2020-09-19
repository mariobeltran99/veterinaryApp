import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgrocerComponent } from './viewgrocer.component';

describe('ViewgrocerComponent', () => {
  let component: ViewgrocerComponent;
  let fixture: ComponentFixture<ViewgrocerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgrocerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
