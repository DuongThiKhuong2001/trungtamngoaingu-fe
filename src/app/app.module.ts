
import { TypeClassComponent } from './components/admin/type-class/type-class.component';

import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root.component';
import { httpInterceptorProviders } from './services/http.interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { TestComponent } from './components/student/test/test.component';
import {
  Roles,
  SidebarComponent,
} from './components/admin/sidebar/sidebar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { ToastrModule } from 'ngx-toastr';
import { LecturerComponent } from './components/lecturer/lecturer.component';
import { LecturerHomeComponent } from './components/lecturer/lecturer-home/lecturer-home.component';
import { TestlComponent } from './components/lecturer/testl/testl.component';
import { StudentComponent } from './components/student/student.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { MaterialModule } from './material.module';
import { GuestComponent } from './components/guest/guest.component';
import { GuestFooterComponent } from './components/guest/guest-footer/guest-footer.component';
import { GuestHeaderComponent } from './components/guest/guest-header/guest-header.component';
import { GuestHomeComponent } from './components/guest/guest-home/guest-home.component';
import { GuestResgisterAccountComponent } from './components/guest/guest-resgister-account/guest-resgister-account.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { BreadcrumbsComponent } from './components/admin/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { ListLecturerComponent } from './components/admin/list-lecturer/list-lecturer.component';
import { DetailLecturerComponent } from './components/admin/list-lecturer/detail-lecturer/detail-lecturer.component';
import { DetailStudentComponent } from './components/admin/list-student/detail-student/detail-student.component';
import { ListStudentComponent } from './components/admin/list-student/list-student.component';
import { ListStaffComponent } from './components/admin/list-staff/list-staff.component';
import { DetailStaffComponent } from './components/admin/list-staff/detail-staff/detail-staff.component';
import { NotificationDiglogComponent } from './components/notification/notification-diglog/notification-diglog.component';
import { AddLecturerComponent } from './components/admin/list-lecturer/add-lecturer/add-lecturer.component';
import { Page403Component } from './components/page-error/page403/page403.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { Page404Component } from './components/page-error/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AddStaffComponent } from './components/admin/list-staff/add-staff/add-staff.component';
import { AddStudentComponent } from './components/admin/list-student/add-student/add-student.component';
import { RoleStaffComponent } from './components/admin/list-staff/role-staff/role-staff.component';
import { HosoStudentComponent } from './components/student/hoso-student/hoso-student.component';
import { HosoLecturerComponent } from './components/lecturer/hoso-lecturer/hoso-lecturer.component';
import { StaffComponent } from './components/staff/staff.component';
import { HosoStaffComponent } from './components/staff/hoso-staff/hoso-staff.component';
import { AddTypeclassComponent } from './components/admin/type-class/add-typeclass/add-typeclass.component';
import { EditTypeclassComponent } from './components/admin/type-class/edit-typeclass/edit-typeclass.component';
import { DeleteTypeclassComponent } from './components/admin/type-class/delete-typeclass/delete-typeclass.component';
import { ScheduleComponent } from './components/admin/schedule/schedule.component';
import { AddScheduleComponent } from './components/admin/schedule/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './components/admin/schedule/edit-schedule/edit-schedule.component';
import { DeleteScheduleComponent } from './components/admin/schedule/delete-schedule/delete-schedule.component';
import { CourseComponent } from './components/admin/course/course.component';
import { EditCourseComponent } from './components/admin/course/edit-course/edit-course.component';
import { DeleteCourseComponent } from './components/admin/course/delete-course/delete-course.component';
import { AddCourseComponent } from './components/admin/course/add-course/add-course.component';
import { DetailCourseComponent } from './components/admin/course/detail-course/detail-course.component';
import { RegisterCourseComponent } from './components/student/register-course/register-course.component';
import { QldkComponent } from './components/admin/qldk/qldk.component';
import { DeleteQldkComponent } from './components/admin/qldk/delete-qldk/delete-qldk.component';
import { HuyDangkyComponent } from './components/student/huy-dangky/huy-dangky.component';
import { DetailDangkyComponent } from './components/student/detail-dangky/detail-dangky.component';
import { ClassroomComponent } from './components/admin/classroom/classroom.component';
import { AddClassroomComponent } from './components/admin/classroom/add-classroom/add-classroom.component';
import { EditClassroomComponent } from './components/admin/classroom/edit-classroom/edit-classroom.component';
import { DeleteClassroomComponent } from './components/admin/classroom/delete-classroom/delete-classroom.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { AddRolesComponent } from './components/admin/roles/add-roles/add-roles.component';
import { EditRolesComponent } from './components/admin/roles/edit-roles/edit-roles.component';
import { DeleteRolesComponent } from './components/admin/roles/delete-roles/delete-roles.component';
import { ListNhanvienRolesComponent } from './components/admin/roles/list-nhanvien-roles/list-nhanvien-roles.component';
import { ListHVHPComponent } from './components/admin/qldk/list-hvhp/list-hvhp.component';
import { MyCourseComponent } from './components/student/my-course/my-course.component';
import { ClassComponent } from './components/admin/class/class.component';
import { EditHosoComponent } from './components/student/hoso-student/edit-hoso/edit-hoso.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    BreadcrumbsComponent,
    TestComponent,
    SidebarComponent,
    LoginComponent,
    LogoutComponent,
    ChangePasswordComponent,
    LecturerComponent,
    LecturerHomeComponent,
    ListLecturerComponent,
    ListStudentComponent,
    DetailStudentComponent,
    ListStaffComponent,
    DetailStudentComponent,
    TestlComponent,
    DetailStaffComponent,
    StudentComponent,
    DetailLecturerComponent,
    StudentHomeComponent,
    GuestComponent,
    GuestFooterComponent,
    GuestHeaderComponent,
    GuestHomeComponent,
    GuestResgisterAccountComponent,
    NotificationDiglogComponent,
    NotificationDiglogComponent,
    AddLecturerComponent,
    Page403Component,
    PageErrorComponent,
    Page404Component,
    AddStaffComponent,
    AddStudentComponent,
    RoleStaffComponent,
    HosoStudentComponent,
    HosoLecturerComponent,
    StaffComponent,
    HosoStaffComponent,
    TypeClassComponent,
    AddTypeclassComponent,
    EditTypeclassComponent,
    DeleteTypeclassComponent,
    ScheduleComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    DeleteScheduleComponent,
    CourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    AddCourseComponent,
    DetailCourseComponent,
    RegisterCourseComponent,
    QldkComponent,
    DeleteQldkComponent,
    HuyDangkyComponent,
    DetailDangkyComponent,
    ClassroomComponent,
    AddClassroomComponent,
    EditClassroomComponent,
    DeleteClassroomComponent,
    RolesComponent,
    AddRolesComponent,
    EditRolesComponent,
    DeleteRolesComponent,
    ListNhanvienRolesComponent,
    ListHVHPComponent,
    MyCourseComponent,
    ClassComponent,
    EditHosoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true,
    }),
  ],
  providers: [httpInterceptorProviders, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
