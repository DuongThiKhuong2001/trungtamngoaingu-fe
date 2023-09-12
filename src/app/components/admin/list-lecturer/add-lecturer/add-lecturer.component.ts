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
  selectedNenTang: any;
  isFileRequiredError = false;
  nenTangList: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      lecturer: any;
    },
    private dialogRef: MatDialogRef<DetailLecturerComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    hoTen: ['', Validators.required],
    tenDangNhap: ['', Validators.required],
    matKhau: ['', Validators.required],
    email: ['', Validators.required],
    diaChi: ['', Validators.required],
    gioiTinh: ['', Validators.required],
    sdt: ['', Validators.required],
  });

  savelecturer() {
    if (this.myform.valid) {
      const formData = new FormData();
      formData.append('hoTen', this.myform.value.hoTen as string);
      formData.append('tenDangNhap', this.myform.value.tenDangNhap as string);
      formData.append('matKhau', this.myform.value.matKhau as string);
      formData.append('email', this.myform.value.email as string);
      formData.append('diaChi', this.myform.value.email as string);
      formData.append('gioiTinh', this.myform.value.email as string);
      formData.append('sdt', this.myform.value.sdt as string);
    }
  }
}
