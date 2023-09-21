import { TaiKhoan } from './TaiKhoan';

export interface NhanVien {
  maTaiKhoan: number;
  namNhapHoc: string;
  taiKhoan: TaiKhoan;
  quyen: string;
  tenVaiTro: string;
}
