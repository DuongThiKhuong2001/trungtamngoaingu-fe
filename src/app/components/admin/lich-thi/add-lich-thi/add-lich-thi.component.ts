import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChungChiService } from 'src/app/services/chung-chi.service';
import { LichThiService } from 'src/app/services/lich-thi.service';
import { PhongHocService } from 'src/app/services/phong-hoc.service';

@Component({
  selector: 'app-add-lich-thi',
  templateUrl: './add-lich-thi.component.html',
  styleUrls: ['./add-lich-thi.component.css'],
})
export class AddLichThiComponent implements OnInit {
  ListPhong: any[] = [];
  ListChungChi: any[] = [];
  constructor(
    private dialogRef: MatDialogRef<AddLichThiComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private lichThiService: LichThiService,
    private phongHocService: PhongHocService,
    private chungChiService: ChungChiService
  ) { }

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {
    this.loadPhong();
    this.loadChungChi();
  }
  loadPhong() {
    this.phongHocService.layDanhSachPhongHoc().subscribe((data) => {
      this.ListPhong = data;
    });
  }
  loadChungChi() {
    this.chungChiService.layTatCaChungChi().subscribe((data) => {
      this.ListChungChi = data;
    });
  }
  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    maPhong: ['', [Validators.required]],
    maChungChi: ['', [Validators.required]],
    ngayThi: ['', [Validators.required]],
    caThi: ['', [Validators.required]],
  });

  savetypeclass() {
    //   if (this.myform.valid) {
    //     const formData = this.myform.value;
    //     this.lichThiService.addLichThi(formData).subscribe({
    //       next: (data) => {
    //         console.log(data);
    //         this.closePopup();
    //         this.toastr.success('Thêm lịch học thành công!');
    //       },
    //       error: (err) => {
    //         this.toastr.error(err);
    //       },
    //     });
    //   }
    // }
  }
}
