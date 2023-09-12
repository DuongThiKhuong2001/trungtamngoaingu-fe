import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: ['']
})
export class RootComponent {
  private role: string = '';
  isLoggedIn = false;
  username?: string;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {

      const user = this.storageService.getUser();
      this.role = user.quyen;
      console.log(this.role)
      this.username = user.tenTaiKhoan;
      if (this.role === 'QuanTriVien') {
        this.router.navigate(['/quan-tri-vien']);
      }
      if (this.role === 'HocVien') {
        this.router.navigate(['/hoc-vien']);
      }
      if (this.role === 'GiaoVien') {
        this.router.navigate(['/giao-vien']);
      }
       if (this.role === 'NhanVien') {
         this.router.navigate(['/nhan-vien']);
       }
    } else {
      this.router.navigate(['/trang-chu']);
    }
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }

}
