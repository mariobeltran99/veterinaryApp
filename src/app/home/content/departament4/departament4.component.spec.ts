import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Departament4Component } from './departament4.component';

describe('Departament4Component', () => {
  let component: Departament4Component;
  let fixture: ComponentFixture<Departament4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Departament4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Departament4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
