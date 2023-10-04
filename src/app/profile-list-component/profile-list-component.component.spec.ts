import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListComponentComponent } from './profile-list-component.component';

describe('ProfileListComponentComponent', () => {
  let component: ProfileListComponentComponent;
  let fixture: ComponentFixture<ProfileListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileListComponentComponent]
    });
    fixture = TestBed.createComponent(ProfileListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
