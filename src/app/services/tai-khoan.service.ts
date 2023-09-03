import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaiKhoanService {
  private apiBaseUrl = '/api/tai-khoan';

  constructor(private http: HttpClient) {}

  authenticateUser(loginRequest: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/dang-nhap`, loginRequest);
  }

  createAccount(taiKhoanRequest: any): Observable<string> {
    return this.http.post<string>(
      `${this.apiBaseUrl}/them-moi`,
      taiKhoanRequest
    );
  }

  getAllUsersByRole(
    page: number,
    size: number,
    sortBy: string,
    sortDir: string,
    searchTerm: string,
    userRole: string
  ): Observable<any> {
    const params = {
      page: page.toString(),
      size: size.toString(),
      sortBy,
      sortDir,
      searchTerm,
      userRole,
    };

    return this.http.get(`${this.apiBaseUrl}/lay-danh-sach`, { params });
  }

  updateStatus(status: string, tenDangNhap: string): Observable<any> {
    const params = { status, tenDangNhap };
    return this.http.put(`${this.apiBaseUrl}/cap-nhat-trang-thai`, null, {
      params,
    });
  }

  getUserDetails(tenDangNhap: string): Observable<any> {
    const params = { tenDangNhap };
    return this.http.get(`${this.apiBaseUrl}/lay-thong-tin-chi-tiet`, {
      params,
    });
  }

  doiMatKhau(matKhauMoiRequest: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/doi-mat-khau`, matKhauMoiRequest);
  }

  updateAccount(username: string, taiKhoanRequest: any): Observable<string> {
    return this.http.put<string>(
      `${this.apiBaseUrl}/cap-nhat/${username}`,
      taiKhoanRequest
    );
  }
}