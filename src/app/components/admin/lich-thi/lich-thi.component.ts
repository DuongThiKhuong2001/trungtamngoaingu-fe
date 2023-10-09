import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LichThi } from 'src/app/models/LichThi';
import { LichHocService } from 'src/app/services/lich-hoc.service';
import { LichThiService } from 'src/app/services/lich-thi.service';
import { AddLichThiComponent } from './add-lich-thi/add-lich-thi.component';
import { EditLichThiComponent } from './edit-lich-thi/edit-lich-thi.component';
import { DeleteLichThiComponent } from './delete-lich-thi/delete-lich-thi.component';

@Component({
  selector: 'app-lich-thi',
  templateUrl: './lich-thi.component.html',
  styleUrls: ['./lich-thi.component.css'],
})
export class LichThiComponent {
  danhSachLichThi: MatTableDataSource<LichThi> = new MatTableDataSource();
  displayedColumns: string[] = ['stt', 'ngayThi', 'caThi', 'actions'];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private lichThiService: LichThiService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.lichThiService.getAllLichThi().subscribe((data) => {
      this.danhSachLichThi = new MatTableDataSource<LichThi>(data);
      this.danhSachLichThi.paginator = this.paginator;
      this.danhSachLichThi.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachLichThi.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachLichThi.paginator) {
      this.danhSachLichThi.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachLichThi.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addLichThi(): void {
    var popup = this.dialog.open(AddLichThiComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editLichThi(LichThi: LichThi): void {
    const dialogRef = this.dialog.open(EditLichThiComponent, {
      width: '45%',
      data: LichThi,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  modeleteLichThi(maLichThi: number): void {
    const dialogRef = this.dialog.open(DeleteLichThiComponent, {
      width: '350px',
      data: { maLichThi }, // Pass the maLoaiLop value to the dialog
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
