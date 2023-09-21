import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiaoVien } from 'src/app/models/GiaoVien';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';

@Component({
  selector: 'app-hoso-lecturer',
  templateUrl: './hoso-lecturer.component.html',
  styleUrls: ['./hoso-lecturer.component.css'],
})
export class HosoLecturerComponent implements OnInit {
  dataGV!: GiaoVien;

  constructor(
    private router: Router,
    private taiKhoanService: TaiKhoanService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    const user = this.storageService.getUser();
    if (user) {
      this.loadDataForUser(user);
    } else {
      // Xử lý trường hợp không có người dùng hoặc lỗi xảy ra khi lấy dữ liệu.
    }
  }

  loadDataForUser(user: any): void {
    // Gọi API hoặc xử lý dữ liệu dựa trên thông tin người dùng.
    // Ví dụ: Gọi API từ taiKhoanService để lấy thông tin học viên dựa trên user.token.
    this.taiKhoanService.getUserDetails(user.tenTaiKhoan).subscribe({
      next: (data: GiaoVien) => {
        this.dataGV = data;
      },
      error: (error) => {
        // Xử lý lỗi khi không thể lấy thông tin học viên.
        console.error('Lỗi khi lấy thông tin giáo viên:', error);
      },
    });
  }
}
