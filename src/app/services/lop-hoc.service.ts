import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LopHocService {
  private baseUrl = '/api/lop-hoc'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getHocViensByLopHoc(maLop: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${maLop}/hoc-vien`);
  }

  addHocVienToLopHoc(lopHocRequest: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/them-hoc-vien-vao-lop`,
      lopHocRequest
    );
  }

  getSoLuongHocVienHienTai(maLop: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${maLop}/so-luong-hoc-vien`);
  }

  capNhatPhongHoc(maLop: number, maPhongHoc: number): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/${maLop}/cap-nhat-phong-hoc?maPhongHoc=${maPhongHoc}`,
      {}
    );
  }

  chuyenHocVien(maLop: number, lopHocRequest: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/${maLop}/chuyen-hoc-vien`,
      lopHocRequest
    );
  }

  themLopHoc(lopHocRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, lopHocRequest);
  }

  layDanhSachLopHoc(
    page: number,
    size: number,
    sortBy: string,
    sortDir: string,
    searchTerm: string
  ): Observable<any> {
    const params = `?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}&searchTerm=${searchTerm}`;
    return this.http.get(`${this.baseUrl}/lay-danh-sach${params}`);
  }
  // layDanhSachLopHoc(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/lay-danh-sach`);
  // }
  layLopHoc(maLopHoc: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay/${maLopHoc}`);
  }

  suaLopHoc(maLop: number, lopHocRequest: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${maLop}`, lopHocRequest);
  }

  layDanhSachLopCuaKhoaHoc(maKhoaHoc: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/khoa-hoc/${maKhoaHoc}`);
  }

  xoaLopHoc(maLopHoc: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${maLopHoc}`);
  }
}
