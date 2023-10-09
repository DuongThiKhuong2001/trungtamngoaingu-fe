import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLichThiComponent } from './add-lich-thi.component';

describe('AddLichThiComponent', () => {
  let component: AddLichThiComponent;
  let fixture: ComponentFixture<AddLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLichThiComponent]
    });
    fixture = TestBed.createComponent(AddLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
