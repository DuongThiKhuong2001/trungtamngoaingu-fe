import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';

@Component({
  selector: 'app-guest-resgister-account',
  templateUrl: './guest-resgister-account.component.html',
  styleUrls: ['./guest-resgister-account.component.css'],
})
export class GuestResgisterAccountComponent {
  constructor(
    private taiKhoanService: TaiKhoanService,
    private toastr: ToastrService
  ) {}
  formData = {
    hoTen: '', // Tên và Họ
    tenDangNhap: '', // Tên đăng nhập
    email: '', // Email
    soDienThoai: '', // Số điện thoại
    gioiTinh: '', // Giới tính
    matKhau: '', // Mật khẩu
    repeatPassword: '', // Nhập lại mật khẩu
    diaChi: '', // Địa chỉ
    quyen: 'HocVien', // Quyền (nếu có)
    soDTNguoiThan: '', // Số điện thoại người thân (nếu có)
    lop: '', // Lớp học (nếu có)
    truongHoc: '',
    ngaySinh: '2001-01-01',
  };
  resetForm() {
    this.formData = {
      hoTen: '',
      tenDangNhap: '',
      email: '',
      soDienThoai: '',
      gioiTinh: '',
      matKhau: '',
      repeatPassword: '',
      diaChi: '',
      quyen: 'HocVien',
      soDTNguoiThan: '',
      lop: '',
      truongHoc: '',
      ngaySinh: '2001-01-01',
    };
  }
  submitForm() {
    const ngaySinhDate = new Date(this.formData.ngaySinh);
    // Định dạng ngày theo dạng "yyyy-MM-dd" (hoặc định dạng bạn muốn)
    this.formData.ngaySinh = ngaySinhDate.toISOString().split('T')[0];

    this.taiKhoanService.createAccount(this.formData).subscribe({
      next: (response) => {
        this.toastr.success('Bạn đã đăng ký thành công!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Lỗi khi lấy thông tin học viên:', error);
      },
    });
  }
}
