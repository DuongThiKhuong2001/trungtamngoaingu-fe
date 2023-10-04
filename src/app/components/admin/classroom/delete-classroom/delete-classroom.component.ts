import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PhongHocService } from 'src/app/services/phong-hoc.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-classroom',
  templateUrl: './delete-classroom.component.html',
  styleUrls: ['./delete-classroom.component.css'],
})
export class DeleteClassroomComponent {
  maPhongHoc: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maPhongHoc: number },
    public dialogRef: MatDialogRef<DeleteClassroomComponent>,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
    private phongHocService: PhongHocService
  ) {
    this.maPhongHoc = data.maPhongHoc; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  accept() {
    // Call the API service to delete the type class
    this.phongHocService.xoaPhongHoc(this.maPhongHoc).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa phòng học này.');
        } else {
          // Handle other cases or errors
          this.toastr.success('Bạn đã xóa thành công!');
          this.dialogRef.close('accept');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
