// hoso-student.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HocVien } from 'src/app/models/HocVien';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-hoso-student',
  templateUrl: './hoso-student.component.html',
  styleUrls: ['./hoso-student.component.css'],
})
export class HosoStudentComponent implements OnInit {
  dataHV!: HocVien;

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
      // Hiển thị thông báo hoặc xử lý khác tùy theo yêu cầu của bạn.
    }
  }

  loadDataForUser(user: any): void {
    // Gọi API hoặc xử lý dữ liệu dựa trên thông tin người dùng.
    // Ví dụ: Gọi API từ taiKhoanService để lấy thông tin học viên dựa trên user.token.
    this.taiKhoanService.getUserDetails(user.tenTaiKhoan).subscribe({
      next: (data: HocVien) => {
        console.log(data)
        this.dataHV = data;
      },
      error: (error) => {
        // Xử lý lỗi khi không thể lấy thông tin học viên.
        console.error('Lỗi khi lấy thông tin học viên:', error);
        // Hiển thị thông báo lỗi hoặc xử lý khác tùy theo yêu cầu của bạn.
      },
    });
  }
}
