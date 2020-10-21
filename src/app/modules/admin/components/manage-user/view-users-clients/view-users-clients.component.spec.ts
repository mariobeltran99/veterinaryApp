import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersClientsComponent } from './view-users-clients.component';

describe('ViewUsersClientsComponent', () => {
  let component: ViewUsersClientsComponent;
  let fixture: ComponentFixture<ViewUsersClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
