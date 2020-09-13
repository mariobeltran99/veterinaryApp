import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Departament3Component } from './departament3.component';

describe('Departament3Component', () => {
  let component: Departament3Component;
  let fixture: ComponentFixture<Departament3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Departament3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Departament3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
