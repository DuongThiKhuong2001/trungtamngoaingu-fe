import { AuthService } from './../../../services/auth.service';
import { TaiKhoanService } from './../../../services/tai-khoan.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HocVienService } from 'src/app/services/hoc-vien.service';

@Component({
  selector: 'app-hoso-student',
  templateUrl: './hoso-student.component.html',
  styleUrls: ['./hoso-student.component.css'],
})
export class HosoStudentComponent implements OnInit {
  tenDangNhap!: string;
  hocVien: any;
  displayedColumns: string[] = [
    'tenDangNhap',
    'hoTen',
    'email',
    'soDienThoai',
    'diaChi',
    'gioiTinh',
    'ngaySinh',
    'lop',
    'soDTNguoiThan',
    'truongHoc',
    // Thêm các cột thông tin khác nếu cần
  ];
  constructor(
    private route: ActivatedRoute,
    private taiKhoanService: TaiKhoanService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Lấy tham số tenDangNhap từ URL
    this.route.paramMap.subscribe((params) => {
      const tenDangNhap = params.get('tenDangNhap');
      if (tenDangNhap !== null) {
        this.tenDangNhap = tenDangNhap;
        // Gọi service để lấy thông tin học viên dựa trên tenDangNhap
        this.taiKhoanService
          .getUserDetails(this.tenDangNhap)
          .subscribe((data) => {
            this.hocVien = data;
          });
      } else {
        // Xử lý trường hợp tenDangNhap là null
        // Ví dụ: Hiển thị thông báo lỗi hoặc thực hiện các xử lý khác
      }
    });
  }
}
