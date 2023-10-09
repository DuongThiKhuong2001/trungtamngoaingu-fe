import { PageErrorComponent } from './../../../page-error/page-error.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';
import { LopHocService } from 'src/app/services/lop-hoc.service';
import { PhongHocService } from 'src/app/services/phong-hoc.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
})
export class AddClassComponent implements OnInit {
  ListKhoaHoc: any[] = [];
  ListPhongHoc: any[] = [];
  constructor(
    private dialogRef: MatDialogRef<AddClassComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private lopHocService: LopHocService,
    private khoaHocService: KhoaHocService,
    private phonghocService: PhongHocService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {
    // this.loadKhoaHoc();
    this.loadPhongHoc();
  }
  // loadKhoaHoc() {
  //   this.khoaHocService.getKhoaHocList().subscribe((data) => {
  //     this.ListKhoaHoc = data;
  //   });
  // }
  loadPhongHoc() {
    this.phonghocService.layDanhSachPhongHoc().subscribe((data) => {
      this.ListPhongHoc = data;
    });
  }
  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    maPhongHoc: ['', [Validators.required]],
    tenLop: ['', [Validators.required]],
    soLuong: [
      '',
      [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    ],
  });

  savetypeclass() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.lopHocService.themLopHoc(formData).subscribe({
        next: (data) => {
          console.log(data);
          this.closePopup();
          this.toastr.success('Thêm Lớp học thành công!');
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }
}
