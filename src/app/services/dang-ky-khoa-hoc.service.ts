import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DangKyKhoaHocService {
  private apiUrl = '/api/dang-ky-khoa-hoc'; // Đổi thành URL API của bạn

  constructor(private http: HttpClient) {}

  // Lấy danh sách đăng ký khóa học
  getAllDangKyKhoaHoc(params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/lay-danh-sach`, { params });
  }

  // Đăng ký khóa học mới
  themDangKyKhoaHoc(dangKyKhoaHocRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/them`, dangKyKhoaHocRequest);
  }

  // Lấy thông tin đăng ký khóa học theo ID
  layDangKyKhoaHoc(maDangKy: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/lay/${maDangKy}`);
  }

  // Cập nhật thông tin đăng ký khóa học
  suaDangKyKhoaHoc(
    maDangKy: number,
    dangKyKhoaHocRequest: any
  ): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/sua/${maDangKy}`,
      dangKyKhoaHocRequest
    );
  }

  // Xóa đăng ký khóa học
  xoaDangKyKhoaHoc(maDangKy: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/xoa/${maDangKy}`);
  }
}
