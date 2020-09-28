import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Departament2Component } from './departament2.component';

describe('Departament2Component', () => {
  let component: Departament2Component;
  let fixture: ComponentFixture<Departament2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Departament2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Departament2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
