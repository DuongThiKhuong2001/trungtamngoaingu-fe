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
import { Page403Component } from './components/page-error/page403/page403.component';
import { Page404Component } from './components/page-error/page404/page404.component';
import { DetailStaffComponent } from './components/admin/list-staff/detail-staff/detail-staff.component';
import { HosoStudentComponent } from './components/student/hoso-student/hoso-student.component';
import { HosoLecturerComponent } from './components/lecturer/hoso-lecturer/hoso-lecturer.component';
import { TypeClassComponent } from './components/admin/type-class/type-class.component';
import { ScheduleComponent } from './components/admin/schedule/schedule.component';
import { CourseComponent } from './components/admin/course/course.component';
import { RegisterCourseComponent } from './components/student/register-course/register-course.component';
import { QldkComponent } from './components/admin/qldk/qldk.component';
import { ClassroomComponent } from './components/admin/classroom/classroom.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { MyCourseComponent } from './components/student/my-course/my-course.component';
import { ClassComponent } from './components/admin/class/class.component';
import { ChungChiComponent } from './components/admin/chung-chi/chung-chi.component';
import { BacChungChiComponent } from './components/admin/bac-chung-chi/bac-chung-chi.component';
import { LichThiComponent } from './components/admin/lich-thi/lich-thi.component';

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
        component: AdminHomeComponent,
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
        path: 'loai-lop',
        component: TypeClassComponent,
        data: {
          titulo: 'Loại lớp',
          breadcrumbs: [{ label: 'Loại lớp', url: '/' }],
        },
      },
      {
        path: 'lich-hoc',
        component: ScheduleComponent,
        data: {
          titulo: 'Lịch học',
          breadcrumbs: [{ label: 'Lịch học', url: '/' }],
        },
      },
      {
        path: 'khoa-hoc',
        component: CourseComponent,
        data: {
          titulo: 'Khóa học',
          breadcrumbs: [{ label: 'Khóa học', url: '/' }],
        },
      },
      {
        path: 'quan-ly-dang-ky-khoa-hoc',
        component: QldkComponent,
        data: {
          titulo: 'QL Đăng ký Khóa học',
          breadcrumbs: [{ label: 'Khóa học', url: '/' }],
        },
      },
      {
        path: 'quan-ly-phong-hoc',
        component: ClassroomComponent,
        data: {
          titulo: 'Quản lí phòng học',
          breadcrumbs: [{ label: 'Phòng học', url: '/' }],
        },
      },
      {
        path: 'quan-ly-lop-hoc',
        component: ClassComponent,
        data: {
          titulo: 'Quản lí lớp học',
          breadcrumbs: [{ label: 'Lớp học', url: '/' }],
        },
      },
      {
        path: 'quan-ly-lich-thi',
        component: LichThiComponent,
        data: {
          titulo: 'Quản lí lịch thi',
          breadcrumbs: [{ label: 'Lịch thi', url: '/' }],
        },
      },
      {
        path: 'quan-ly-chung-chi',
        component: ChungChiComponent,
        data: {
          titulo: 'Quản lí chứng chỉ',
          breadcrumbs: [{ label: 'Chứng chỉ', url: '/' }],
        },
      },
      {
        path: 'quan-ly-bac-chung-chi',
        component: BacChungChiComponent,
        data: {
          titulo: 'Quản lí bậc chứng chỉ',
          breadcrumbs: [{ label: 'Bậc chứng chỉ', url: '/' }],
        },
      },
      {
        path: 'danh-sach-vai-tro',
        component: RolesComponent,
        data: {
          titulo: 'Quản lí vai trò',
          breadcrumbs: [{ label: 'Vai trò', url: '/' }],
        },
      },
    ],
  },

  //hoc vien
  {
    path: 'hoc-vien',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentHomeComponent,
        data: { titulo: 'Trang chủ' },
      },
      {
        path: 'trang-chu',
        component: StudentHomeComponent,
        data: {
          titulo: 'Trang chủ',
          breadcrumbs: [{ label: 'Trang chủ', url: '/' }],
        },
      },
      {
        path: 'dang-ky-khoa-hoc',
        component: RegisterCourseComponent,
        data: {
          titulo: 'Khóa học',
          breadcrumbs: [{ label: 'Các khóa học', url: '/' }],
        },
      },
      {
        path: 'khoa-hoc-cua-toi',
        component: MyCourseComponent,
        data: {
          titulo: 'Khóa học của tôi',
          breadcrumbs: [{ label: 'Các khóa học', url: '/' }],
        },
      },
      {
        path: 'ho-so',
        component: HosoStudentComponent,
        data: {
          titulo: 'Hồ sơ',
          breadcrumbs: [{ label: 'Hồ sơ cá nhân', url: '/' }],
        },
      },
    ],
  },
  //giao vien
  {
    path: 'giao-vien',
    component: LecturerComponent,
    children: [
      {
        path: '',
        component: LecturerHomeComponent,
        data: { titulo: 'Trang chủ' },
      },

      {
        path: 'trang-chu',
        component: LecturerHomeComponent,
        data: {
          titulo: 'Trang chủ',
          breadcrumbs: [{ label: 'Trang chủ', url: '/' }],
        },
      },
      {
        path: 'ho-so',
        component: HosoLecturerComponent,
        data: {
          titulo: 'Hồ sơ',
          breadcrumbs: [{ label: 'Hồ sơ cá nhân', url: '/' }],
        },
      },
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
  { path: '403', component: Page403Component },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
