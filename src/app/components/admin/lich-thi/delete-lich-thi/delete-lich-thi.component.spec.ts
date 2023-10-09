import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLichThiComponent } from './delete-lich-thi.component';

describe('DeleteLichThiComponent', () => {
  let component: DeleteLichThiComponent;
  let fixture: ComponentFixture<DeleteLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLichThiComponent]
    });
    fixture = TestBed.createComponent(DeleteLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
