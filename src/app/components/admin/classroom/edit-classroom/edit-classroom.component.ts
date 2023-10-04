import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhongHocService } from 'src/app/services/phong-hoc.service';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css'],
})
export class EditClassroomComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditClassroomComponent>,
    private formBuilder: FormBuilder,
    private phongHocService: PhongHocService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      tenPhong: ['', Validators.required],
      sucChua: ['', Validators.required],
      viTri: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp cần chỉnh sửa và điền vào form
    this.editForm.setValue({
      tenPhong: this.data.tenPhong,
      sucChua: this.data.sucChua,
      viTri: this.data.viTri,
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedLoaiLop = {
        tenPhong: this.editForm.value.tenPhong,
        sucChua: this.editForm.value.sucChua,
        viTri: this.editForm.value.viTri,
      };

      // Gọi service để cập nhật thông tin loại lớp
      this.phongHocService
        .capNhatPhongHoc(this.data.maPhongHoc, updatedLoaiLop)
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
