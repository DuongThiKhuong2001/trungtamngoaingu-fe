import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NhanVienService } from 'src/app/services/nhan-vien.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-roles',
  templateUrl: './delete-roles.component.html',
  styleUrls: ['./delete-roles.component.css'],
})
export class DeleteRolesComponent {
  maVaiTro: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maVaiTro: number },
    public dialogRef: MatDialogRef<DeleteRolesComponent>,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
    private nhanVienSerice: NhanVienService
  ) {
    this.maVaiTro = data.maVaiTro; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }
  accept() {
    // Call the API service to delete the type class
    this.nhanVienSerice.xoaVaiTro(this.maVaiTro).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa vai trò này.');
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
