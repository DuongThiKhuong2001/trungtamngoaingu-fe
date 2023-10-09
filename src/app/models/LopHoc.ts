import { HocVien } from "./HocVien";
import { KhoaHoc } from "./KhoaHoc";
import { LichHoc } from "./LichHoc";


export interface LopHoc {
  maLop: number;
  soLuong: number;
  phong: any;
  khoaHoc: KhoaHoc;
  lichHoc: LichHoc;
  tenLop: string;
  hocViens: HocVien;
}
