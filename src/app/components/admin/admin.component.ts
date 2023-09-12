import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-admin',
  template: ` <app-admin-header></app-admin-header>
 `,

  styles: [
    `
      .mat-toolbar.mat-dark {
        background: #000;
        color: #fff;
      }
      app-menu {
        position: absolute;
        width: 100%;
        top: 4rem;
        z-index: 1;
      }
    `,
  ],
})
export class AdminComponent {
  private roles: string = '';
  isLoggedIn = false;
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    const user = this.storageService.getUser();
    this.roles = user.quyen;
    if (!this.isLoggedIn || this.roles !== 'QuanTriVien') {
      //console.log(user);
      this.router.navigate(['/403']);
    }
  }
}
