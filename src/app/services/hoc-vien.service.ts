import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HocVienService {
  private apiBaseUrl = '/api'; // Điều này phụ thuộc vào cấu hình proxy của bạn

  constructor(private http: HttpClient) {}

  // Phương thức để lấy danh sách tất cả các học viên
  getAllHocViens(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/hoc-vien/lay-danh-sach`);
  }

  // Phương thức để lấy thông tin chi tiết của một học viên bằng mã tài khoản
  getHocVienDetails(maTaiKhoan: number): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/hoc-vien/lay-thong-tin-chi-tiet?maTaiKhoan=${maTaiKhoan}`
    );
  }

  // Phương thức để cập nhật thông tin của một học viên
  updateHocVien(maTaiKhoan: number, hocVienData: any): Observable<any> {
    return this.http.put(
      `${this.apiBaseUrl}/hoc-vien/cap-nhat/${maTaiKhoan}`,
      hocVienData
    );
  }
}
