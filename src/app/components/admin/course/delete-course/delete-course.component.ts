import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteScheduleComponent } from '../../schedule/delete-schedule/delete-schedule.component';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css'],
})
export class DeleteCourseComponent {
  maKhoaHoc: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maKhoaHoc: number },
    public dialogRef: MatDialogRef<DeleteScheduleComponent>,
    private router: Router,
    private toastr: ToastrService,
    private khoahocService: KhoaHocService
  ) {
    console.log('maKhoaHoc:', data.maKhoaHoc);
    this.maKhoaHoc = data.maKhoaHoc; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  accept() {
    // Pass maLoaiLop to the method and handle the response using subscribe
    this.khoahocService.deleteKhoaHoc(this.maKhoaHoc).subscribe({
      next: (response) => {
        if (response) {
          this.toastr.success('Bạn đã Xóa thành công!');
          this.dialogRef.close('accept');
        } else {
          // Handle the case where the deletion failed
          this.toastr.error('Xóa không thành công. Vui lòng thử lại sau.');
        }
      },
      error: (error) => {
        console.error('Error deleting Khóa Học:', error);
      },
    });
  }
}
