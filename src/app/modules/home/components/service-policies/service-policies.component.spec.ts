import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePoliciesComponent } from './service-policies.component';

describe('ServicePoliciesComponent', () => {
  let component: ServicePoliciesComponent;
  let fixture: ComponentFixture<ServicePoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
