import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css'],
})
export class MyCourseComponent implements OnInit {
  isRegistered: boolean = false;
  danhSachDangKy: MatTableDataSource<DangKyKH> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'hocVien.taiKhoan.tenDangNhap',
    'hocVien.taiKhoan.hoTen',
    'khoaHoc.tenKhoaHoc',
    'trangThaiHocPhi',
    'ngayDangKy',
  ];
  length: number = 0;
  searchTerm: string = '';
  loggedInUsername: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private storageService: StorageService,
    private dangKyKhoaHocService: DangKyKhoaHocService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.loggedInUsername = user.tenTaiKhoan;

    if (!user) {
      this.toastr.error('Không tìm thấy tên đăng nhập', 'Lỗi');
      return;
    }
    this.loadDanhSachKhoaHoc(user.tenTaiKhoan);
  }

  ngAfterViewInit() {
    this.danhSachDangKy.paginator = this.paginator;
    this.danhSachDangKy.sort = this.sort;
    this.paginator.page.subscribe(() => {
      this.loadDanhSachKhoaHoc(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });

    this.sort.sortChange.subscribe(() => {
      this.loadDanhSachKhoaHoc(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });
  }

  loadDanhSachKhoaHoc(
    page: number = 0,
    size: number = 10,
    sortBy: string = '',
    sortDir: string = 'ASC'
  ) {
    // Lấy thông tin đăng nhập của người dùng
    const user = this.storageService.getUser();

    if (!user) {
      this.toastr.error('Không tìm thấy tên đăng nhập', 'Lỗi');
      return;
    }

    // Sử dụng service để lấy danh sách đăng ký khóa học của học viên cụ thể
    this.dangKyKhoaHocService
      .getAllDangKyKhoaHoc(
        page,
        size,
        sortBy,
        sortDir,
        this.searchTerm,

        user.tenTaiKhoan // Sử dụng tên đăng nhập của người dùng để lọc theo học viên
      )
      .subscribe((data: any) => {
        this.danhSachDangKy = new MatTableDataSource<DangKyKH>(data.content);
        this.paginator.length = data.totalElements;
        this.length = data.totalElements;
      });
  }

  onSearch() {
    this.loadDanhSachKhoaHoc();
  }

  refresh() {
    this.searchTerm = '';
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadDanhSachKhoaHoc();
  }

  // Các hàm xử lý khác
}
