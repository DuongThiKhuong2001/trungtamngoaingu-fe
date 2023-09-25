import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { KhoaHoc } from 'src/app/models/KhoaHoc';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  danhSachKhoaHoc: MatTableDataSource<KhoaHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenkhoahoc',
    'ngaybatdau',
    'ngayketthuc',
    'sua',
    'xoa',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private khoahocService: KhoaHocService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

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
    sortBy: string = 'maKhoaHoc',
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

  addschedule(): void {
    const popup = this.dialog.open(AddCourseComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe(() => {
      this.loadDanhSachKhoaHoc();
    });
  }

  editschedule(khoaHoc: KhoaHoc): void {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      width: '45%',
      data: khoaHoc,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDanhSachKhoaHoc();
      }
    });
  }

  modeleteschedule(maKhoaHoc: number): void {
    const dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '350px',
      data: { maKhoaHoc }, // Pass the maLoaiLop value to the dialog
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        // Handle any further actions if needed after deletion
      }
      this.loadDanhSachKhoaHoc();
    });
  }
}
