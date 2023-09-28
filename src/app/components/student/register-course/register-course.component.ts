import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


import { KhoaHoc } from 'src/app/models/KhoaHoc';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent {
  isRegistered: boolean = false;
  danhSachKhoaHoc: MatTableDataSource<KhoaHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenkhoahoc',
    'ngaybatdau',
    'ngayketthuc',
    'action',
  ];
  length: number = 0;
  searchTerm: string = '';
  loggedInUsername: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private khoahocService: KhoaHocService,
    private storageService: StorageService,
    private dangkykhoahocService: DangKyKhoaHocService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private dangKyKhoaHocService: DangKyKhoaHocService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
      this.loggedInUsername = user.tenTaiKhoan;

      if (!user) {
        this.toastr.error('Không tìm thấy tên đăng nhập', 'Lỗi');
        return;
      }
    this.loadDanhSachKhoaHoc();
  }
  ngAfterViewInit() {
    this.danhSachKhoaHoc.paginator = this.paginator;
    this.danhSachKhoaHoc.sort = this.sort;
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
    this.khoahocService
      .getKhoaHocList(page, size, sortBy, sortDir, this.searchTerm)
      .subscribe((data: any) => {
        console.log(data);
        this.danhSachKhoaHoc = new MatTableDataSource<KhoaHoc>(data.content);
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

  // Trong file component.ts
  dangkyKH(maKhoaHoc: number) {
    const body = {
      tenDangNhap: this.loggedInUsername,
      maKhoaHoc: maKhoaHoc,
    };
    this.dangkykhoahocService.themDangKyKhoaHoc(body).subscribe({
      next: (data) => {
        if (data.message && data.message === 'exist') {
          this.toastr.warning('Bạn đã đăng ký khóa học này rồi!');
        } else {
          this.loadDanhSachKhoaHoc();
          this.toastr.success('Bạn đã đăng ký khóa học thành công!');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // kiemTraDangKy(ma: any) {
  //   const user = this.storageService.getUser();
  //   this.loggedInUsername = user.tenTaiKhoan;

  //   if (!user) {
  //     this.toastr.error('Không tìm thấy tên đăng nhập', 'Lỗi');
  //     return;
  //   }
  //   const body = {
  //     tenDangNhap: this.loggedInUsername,
  //     maKhoaHoc: ma,
  //   };
  //   this.dangkykhoahocService.kiemTraDangKyKhoaHoc(body).subscribe({
  //     next: (data) => {
  //       if (data.message && data.message === 'exist') {
  //         this.isRegistered = true;
  //       } else if (data.message && data.message === 'not-exist') {
  //         this.isRegistered = false;
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
