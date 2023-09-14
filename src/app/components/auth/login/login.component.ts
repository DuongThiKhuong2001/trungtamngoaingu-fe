import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loggedInUsername: any;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      this.isLoggedIn = true;
      this.router.navigate(['']);
    }
  }

  submit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        //console.log(data);
        if (data.message === 'account-warning') {
          this.errorMessage = 'Sai thông tin tài khoản hoặc mật khẩu!';
          this.isLoginFailed = true;
          this.router.navigate(['/dang-nhap']);
        } else if (data.message === 'account-block') {
          this.errorMessage = 'Tài khoản bị khóa!!!';
          this.isLoginFailed = true;
          this.router.navigate(['/dang-nhap']);
        } else {
          this.storageService.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['']);
          this.toastr.success('Đăng nhập thành công');
        }
      },
      error: (err) => {
        console.log(err.error);
        if (err.status === 504) {
          // this.router.navigate(['/dang-nhap']);
          console.log('Bao tri');
        } else {
          console.log(err);
        }
      },
    });
  }
}
