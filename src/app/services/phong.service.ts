import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhongService {
  private apiUrl = '/api/phong'; // Điều chỉnh URL API của bạn ở đây

  constructor(private http: HttpClient) {}

  // Lấy danh sách phòng
  getPhongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/danh-sach/Thi`); // Thay 'Thi' bằng loại phòng mong muốn
  }

  // Lấy thông tin phòng theo ID
  getPhongById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Thêm phòng
  addPhong(phong: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/them`, phong);
  }

  // Cập nhật phòng
  updatePhong(id: number, phong: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cap-nhat/${id}`, phong);
  }

  // Xóa phòng
  deletePhong(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/xoa/${id}`);
  }
}
