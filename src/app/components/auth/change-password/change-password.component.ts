import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  matKhauCu: string = '';
  matKhauMoi: string = '';
  nhapLaiMatKhauMoi: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Kiểm tra xem mật khẩu mới và nhập lại mật khẩu mới có khớp nhau không
    if (this.matKhauMoi !== this.nhapLaiMatKhauMoi) {
      // Hiển thị thông báo lỗi cho người dùng
      alert('Mật khẩu mới không khớp. Vui lòng nhập lại.');
      return;
    }

    // Gửi yêu cầu đổi mật khẩu đến máy chủ
    const matKhauMoiRequest = {
      matKhauCu: this.matKhauCu,
      matKhauMoi: this.matKhauMoi,
    };

    this.http.put('/api/doi-mat-khau', matKhauMoiRequest).subscribe(
      (response) => {
        // Xử lý phản hồi từ máy chủ ở đây
        alert('Mật khẩu đã được thay đổi thành công.');
      },
      (error) => {
        // Xử lý lỗi ở đây
        alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    );
  }
}
