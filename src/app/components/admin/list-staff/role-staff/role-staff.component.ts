import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';

@Component({
  selector: 'app-role-staff',
  templateUrl: './role-staff.component.html',
  styleUrls: ['./role-staff.component.css'],
})
export class RoleStaffComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      lecturer: any;
    },
    private dialogRef: MatDialogRef<RoleStaffComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private taiKhoanService: TaiKhoanService
  ) {}

  get formControls() {
    return this.myform.controls;
  }
  myform = this.formBuilder.group({
    
  });

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }
}
