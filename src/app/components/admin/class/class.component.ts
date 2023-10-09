import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LopHoc } from 'src/app/models/LopHoc';
import { LopHocService } from 'src/app/services/lop-hoc.service';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { DeleteClassComponent } from './delete-class/delete-class.component';
import { DetailClassComponent } from './detail-class/detail-class.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  danhSachLopHoc: MatTableDataSource<LopHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    // 'maLichHoc',
    'tenLop',
    'soLuong',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private lopHocService: LopHocService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadDanhSachLopHoc();
  }
  ngAfterViewInit() {
    this.danhSachLopHoc.paginator = this.paginator;
    this.danhSachLopHoc.sort = this.sort;
    this.paginator.page.subscribe(() => {
      this.loadDanhSachLopHoc(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });

    this.sort.sortChange.subscribe(() => {
      this.loadDanhSachLopHoc(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });
  }

  loadDanhSachLopHoc(
    page: number = 0,
    size: number = 10,
    sortBy: string = '',
    sortDir: string = 'ASC'
  ) {
    this.lopHocService
      .layDanhSachLopHoc(page, size, sortBy, sortDir, this.searchTerm)
      .subscribe((data: any) => {
        this.danhSachLopHoc = new MatTableDataSource<LopHoc>(data.content);
        this.paginator.length = data.totalElements;
        this.length = data.totalElements;
      });
  }

  onSearch() {
    this.loadDanhSachLopHoc();
  }

  refresh() {
    this.searchTerm = '';
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadDanhSachLopHoc();
  }

  addclass(): void {
    var popup = this.dialog.open(AddClassComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDanhSachLopHoc();
    });
  }

  editclass(lopHoc: LopHoc): void {
    const dialogRef = this.dialog.open(EditClassComponent, {
      width: '45%',
      data: lopHoc,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDanhSachLopHoc();
      }
    });
  }

  modeleteclass(maLopHoc: number): void {
    const dialogRef = this.dialog.open(DeleteClassComponent, {
      width: '350px',
      data: { maLopHoc }, // Pass the maLoaiLop value to the dialog
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        // Handle any further actions if needed after deletion
      }
      this.loadDanhSachLopHoc();
    });
  }
  detailClass(lopHoc: any | null): void {
    if (lopHoc) {
      var popup = this.dialog.open(DetailClassComponent, {
        data: {
          lopHoc: lopHoc,
        },
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
      });
    }
  }
}
