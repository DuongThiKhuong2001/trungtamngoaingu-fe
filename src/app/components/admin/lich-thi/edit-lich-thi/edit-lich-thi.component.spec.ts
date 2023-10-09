import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLichThiComponent } from './edit-lich-thi.component';

describe('EditLichThiComponent', () => {
  let component: EditLichThiComponent;
  let fixture: ComponentFixture<EditLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLichThiComponent]
    });
    fixture = TestBed.createComponent(EditLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
