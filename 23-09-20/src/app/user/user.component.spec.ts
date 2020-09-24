import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //own test case
  it('checked component name', () => {
    expect(component.componentName).toBe('user');
  });
  it('checked component function', () => {
    expect(component.sum(30, 20)).toBe(50);
  });
  it('checked component function', () => {
    expect(component.sum(30, 20)).toBe(50);
  });
  it('check html element', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.user_component').textContent).toContain(
      'user'
    );
  });
});
