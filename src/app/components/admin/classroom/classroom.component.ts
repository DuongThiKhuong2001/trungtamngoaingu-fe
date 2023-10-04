import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { PhongHoc } from 'src/app/models/PhongHoc';
import { PhongHocService } from 'src/app/services/phong-hoc.service';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { EditClassroomComponent } from './edit-classroom/edit-classroom.component';
import { DeleteClassroomComponent } from './delete-classroom/delete-classroom.component';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
})
export class ClassroomComponent implements OnInit {
  danhSachPhongHoc: MatTableDataSource<PhongHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenPhong',
    'sucChua',
    'viTri',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private phongHocService: PhongHocService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.phongHocService.layDanhSachPhongHoc().subscribe((data) => {
      this.danhSachPhongHoc = new MatTableDataSource<PhongHoc>(data);
      this.danhSachPhongHoc.paginator = this.paginator;
      this.danhSachPhongHoc.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachPhongHoc.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachPhongHoc.paginator) {
      this.danhSachPhongHoc.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachPhongHoc.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addclassroom(): void {
    var popup = this.dialog.open(AddClassroomComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editClassroom(phongHoc: PhongHoc): void {
    const dialogRef = this.dialog.open(EditClassroomComponent, {
      width: '45%',
      data: phongHoc,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  OpenDeleteClassroom(maPhongHoc: number): void {
    const dialogRef = this.dialog.open(DeleteClassroomComponent, {
      width: '350px',
      data: { maPhongHoc }, // Pass the maLoaiLop value to the dialog
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        // Handle any further actions if needed after deletion
      }
      this.loadDL();
    });
  }
}
