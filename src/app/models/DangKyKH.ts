import { HocVien } from './HocVien';
import { KhoaHoc } from './KhoaHoc';
export interface DangKyKH {
  maDangKy: number;
  trangThaiHocPhi: string;
  hocVien: HocVien;
  khoaHoc: KhoaHoc;
  ngayDangKy: Date;
  
}

export enum TrangThaiHocPhi {
  CHUA_DONG = 'CHUA_DONG',
  DA_DONG = 'DA_DONG',
}
