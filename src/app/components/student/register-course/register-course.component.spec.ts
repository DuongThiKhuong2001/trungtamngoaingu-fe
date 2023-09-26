import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCourseComponent } from './register-course.component';

describe('RegisterCourseComponent', () => {
  let component: RegisterCourseComponent;
  let fixture: ComponentFixture<RegisterCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCourseComponent]
    });
    fixture = TestBed.createComponent(RegisterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
