import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';

@Component({
  selector: 'app-guest-resgister-account',
  templateUrl: './guest-resgister-account.component.html',
  styleUrls: ['./guest-resgister-account.component.css'],
})
export class GuestResgisterAccountComponent {
  constructor(
    private taiKhoanService: TaiKhoanService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  get formData() {
    return this.formDatas.controls;
  }
  formDatas = this.formBuilder.group({
    hoTen: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^.*\s.*$/),
      ],
    ], // Tên và Họ
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
    soDTNguoiThan: [],
    lop: [],
    truongHoc: [],
    repeatPassword: '',
  });
  // resetForm() {
  //   this.formDatas = this.formBuilder.group({
  //     hoTen: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(6),
  //         Validators.pattern(/^.*\s.*$/),
  //       ],
  //     ],
  //     tenDangNhap: '',
  //     email: '',
  //     soDienThoai: '',
  //     gioiTinh: '',
  //     matKhau: '',
  //     repeatPassword: '',
  //     diaChi: '',
  //     quyen: 'HocVien',
  //     soDTNguoiThan: '',
  //     lop: '',
  //     truongHoc: '',
  //     ngaySinh: '2001-01-01',
  //   });
  // }
  submitForm() {
    const formData = this.formDatas.value;
    this.taiKhoanService.createAccount(formData).subscribe({
      next: (response) => {
        this.toastr.success('Bạn đã đăng ký thành công!');
        // this.resetForm();
      },
      error: (error) => {
        console.error('Lỗi khi lấy thông tin học viên:', error);
      },
    });
  }
}
