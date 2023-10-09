import { ChungChi } from "./ChungChi";
import { PhongHoc } from "./PhongHoc";

export interface LichThi {
  maLichThi: number;
  maChungChi: ChungChi;
  ngayThi: Date;
  maPhong: PhongHoc;
  caThi: string; // Use appropriate type based on your data
}
