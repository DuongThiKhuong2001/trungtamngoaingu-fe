import { ListLecturerComponent } from './components/admin/list-lecturer/list-lecturer.component';
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
import { ListStudentComponent } from './components/admin/list-student/list-student.component';
import { ListStaffComponent } from './components/admin/list-staff/list-staff.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'quan-tri-vien',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent,
        data: { titulo: 'Trang chủ' },
      },
      {
        path: 'trang-chu',
        component: TestComponent,
        data: {
          titulo: 'Trang chủ',
          breadcrumbs: [{ label: 'Trang chủ', url: '/' }],
        },
      },

      {
        path: 'danh-sach-giao-vien',
        component: ListLecturerComponent,
        data: {
          titulo: 'Giáo viên',
          breadcrumbs: [{ label: 'Lấy danh sách giáo viên', url: '/' }],
        },
      },
      {
        path: 'danh-sach-hoc-vien',
        component: ListStudentComponent,
        data: {
          titulo: 'Học viên',
          breadcrumbs: [{ label: 'Lấy danh sách học viên', url: '/' }],
        },
      },
      {
        path: 'danh-sach-nhan-vien',
        component: ListStaffComponent,
        data: {
          titulo: 'Nhân viên',
          breadcrumbs: [{ label: 'Lấy danh sách nhân viên', url: '/' }],
        },
      },
      {
        path: 'bangtin',
        component: AdminHomeComponent,
      },
      {
        path: 'khoahoc',
        component: TestComponent,
        data: {
          titulo: 'Khóa học',
          breadcrumbs: [{ label: 'Khóa học', url: '/' }],
        },
      },
      {
        path: 'lophoc',
        component: AdminHomeComponent,
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
