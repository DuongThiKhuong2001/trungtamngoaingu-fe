import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.css'],
})
export class GuestHeaderComponent {
  isMenuOpen = false;
  loggedInUsername: string | null = null;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private dialog: MatDialog,

  ) {}
  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.loggedInUsername = user.tenTaiKhoan;
  }

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
