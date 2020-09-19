import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewveterinarianComponent } from './viewveterinarian.component';

describe('ViewveterinarianComponent', () => {
  let component: ViewveterinarianComponent;
  let fixture: ComponentFixture<ViewveterinarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewveterinarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewveterinarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
