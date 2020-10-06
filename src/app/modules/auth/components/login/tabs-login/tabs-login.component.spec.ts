import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsLoginComponent } from './tabs-login.component';

describe('TabsLoginComponent', () => {
  let component: TabsLoginComponent;
  let fixture: ComponentFixture<TabsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
