import { TaiKhoanService } from './../../../../services/tai-khoan.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailLecturerComponent } from '../detail-lecturer/detail-lecturer.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css'],
})
export class AddLecturerComponent implements OnInit {
  [x: string]: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      lecturer: any;
    },
    private dialogRef: MatDialogRef<DetailLecturerComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private taiKhoanService: TaiKhoanService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    hoTen: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^.*\s.*$/),
      ],
    ],
    tenDangNhap: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{6,8}$/),
      ],
    ],
    matKhau: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    diaChi: ['', Validators.required],
    gioiTinh: ['', Validators.required],
    soDienThoai: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    ngaySinh: [new Date(), Validators.required],
    quyen: ['GiaoVien'],
    kinhNghiem: ['', Validators.required],
  });

  savelecturer() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.taiKhoanService.createAccount(formData).subscribe(() => {
        this.closePopup();
        this.toastr.success('Thêm thành công!');
      });
    }
  }
}
