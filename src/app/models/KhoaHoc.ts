import { LoaiLop } from './LoaiLop';
import { LichHoc } from './LichHoc';
export interface KhoaHoc {
  maLichHoc: LichHoc;
  maLoaiLop: LoaiLop;
  maKhoaHoc: number;
  tenKhoaHoc: string;
  ngayBatDau: string;
  ngayKetThuc: string;
  moTa: LichHoc;
  tenLoaiLop: LoaiLop
}
