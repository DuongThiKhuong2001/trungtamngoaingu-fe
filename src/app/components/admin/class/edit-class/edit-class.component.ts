import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LopHocService } from 'src/app/services/lop-hoc.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css'],
})
export class EditClassComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditClassComponent>,
    private formBuilder: FormBuilder,
    private lopHocService: LopHocService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      tenLop: ['', Validators.required],
      soLuong: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp cần chỉnh sửa và điền vào form
    this.editForm.setValue({
      tenLop: this.data.tenLop,
      soLuong: this.data.soLuong,
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedLopHoc = {
        tenLop: this.editForm.value.tenLop,
        soLuong: this.editForm.value.soLuong,
      };

      // Gọi service để cập nhật thông tin loại lớp
      this.lopHocService
        .suaLopHoc(this.data.maLop, updatedLopHoc)
        .subscribe((response) => {
          if (response) {
            // Cập nhật thành công, đóng dialog và thông báo
            this.dialogRef.close(response);
          } else {
            // Xử lý lỗi nếu cần
          }
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
