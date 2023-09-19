import { TestBed } from '@angular/core/testing';

import { HocVienService } from './hoc-vien.service';

describe('HocVienService', () => {
  let service: HocVienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HocVienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
