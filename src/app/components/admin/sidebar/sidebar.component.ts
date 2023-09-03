import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
export const Roles = {
  QuanTriVien: 'QuanTriVien',
  GiaoVien: 'GiaoVien',
  HocVien: 'HocVien',
  // Thêm các quyền khác ở đây
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  showMenu = false;
  roles: string = '';
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {

    const user = this.storageService.getUser();
    this.roles = user.quyen;

  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
