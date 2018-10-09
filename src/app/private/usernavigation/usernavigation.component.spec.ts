import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernavigationComponent } from './usernavigation.component';

describe('UsernavigationComponent', () => {
  let component: UsernavigationComponent;
  let fixture: ComponentFixture<UsernavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
