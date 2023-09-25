import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddCourseComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private khoahocService: KhoaHocService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    tenKhoaHoc: ['', [Validators.required]],
    ngayBatDau: [''],
    ngayKetThuc: [''],
  });

  savetypeclass() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.khoahocService.createKhoaHoc(formData).subscribe({
        next: (data) => {
          console.log(data);
          this.closePopup();
          this.toastr.success('Thêm lịch học thành công!');
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }
}
