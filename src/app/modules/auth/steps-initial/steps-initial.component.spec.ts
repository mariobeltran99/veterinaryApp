import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsInitialComponent } from './steps-initial.component';

describe('StepsInitialComponent', () => {
  let component: StepsInitialComponent;
  let fixture: ComponentFixture<StepsInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
