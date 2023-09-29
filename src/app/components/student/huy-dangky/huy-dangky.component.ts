import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';

@Component({
  selector: 'app-huy-dangky',
  templateUrl: './huy-dangky.component.html',
  styleUrls: ['./huy-dangky.component.css'],
})
export class HuyDangkyComponent {
  maDangKy: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maDangKy: number },
    public dialogRef: MatDialogRef<HuyDangkyComponent>,
    private router: Router,
    private toastr: ToastrService,
    private dangKyKhoaHocService: DangKyKhoaHocService
  ) {
    console.log('maLichHoc:', data.maDangKy);
    this.maDangKy = data.maDangKy; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }
  accept() {
    // Call the API service to delete the type class
    this.dangKyKhoaHocService.xoaDangKyKhoaHoc(this.maDangKy).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể hủy đăng ký này.');
        } else {
          // Handle other cases or errors
          this.toastr.success('Bạn đã hủy thành công!');
          this.dialogRef.close('accept');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
