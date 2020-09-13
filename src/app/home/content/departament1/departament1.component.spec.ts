import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Departament1Component } from './departament1.component';

describe('Departament1Component', () => {
  let component: Departament1Component;
  let fixture: ComponentFixture<Departament1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Departament1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Departament1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
