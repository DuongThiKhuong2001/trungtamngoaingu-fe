import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLichThiComponent } from './detail-lich-thi.component';

describe('DetailLichThiComponent', () => {
  let component: DetailLichThiComponent;
  let fixture: ComponentFixture<DetailLichThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailLichThiComponent]
    });
    fixture = TestBed.createComponent(DetailLichThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
