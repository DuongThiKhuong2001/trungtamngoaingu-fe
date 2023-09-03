import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { StudentComponent } from './components/student/student.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { TestComponent } from './components/student/test/test.component';
import { LecturerComponent } from './components/lecturer/lecturer.component';
import { LecturerHomeComponent } from './components/lecturer/lecturer-home/lecturer-home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { GuestComponent } from './components/guest/guest.component';
import { GuestHomeComponent } from './components/guest/guest-home/guest-home.component';
import { GuestResgisterAccountComponent } from './components/guest/guest-resgister-account/guest-resgister-account.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'quan-tri-vien',
    component: AdminComponent,
    children: [
      { path: '', component: Component, data: { titulo: 'Trang chủ' } },
      {
        path: 'home',
        component: Component,
        data: {
          titulo: 'Trang chủ',
          breadcrumbs: [{ label: 'Trang chủ', url: '/' }],
        },
      },




    ],
  },

  {
    path: 'hoc-vien',
    component: StudentComponent,
    children: [
      { path: '', component: StudentHomeComponent },
      { path: 'trang-chu', component: StudentHomeComponent },
      { path: 'test', component: TestComponent },
    ],
  },

  {
    path: 'giao-vien',
    component: LecturerComponent,
    children: [
      { path: '', component: LecturerHomeComponent },
      { path: 'trang-chu', component: LecturerHomeComponent },
    ],
  },
  {
    path: 'trang-chu',
    component: GuestComponent,
    children: [
      { path: '', component: GuestHomeComponent },
      { path: 'dang-ky', component: GuestResgisterAccountComponent },
    ],
  },
  {
    path: 'dang-nhap',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
