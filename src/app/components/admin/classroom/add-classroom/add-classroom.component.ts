import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PhongHocService } from 'src/app/services/phong-hoc.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css'],
})
export class AddClassroomComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddClassroomComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private phongHocService: PhongHocService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    tenPhong: ['', [Validators.required]],
    sucChua: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
     viTri: ['', [Validators.required]],
  });

  saveClassroom() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.phongHocService.themPhongHoc(formData).subscribe({
        next: (data) => {
          console.log(data);
          this.closePopup();
          this.toastr.success('Thêm phòng học thành công!');
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }
}
