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
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
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
    TestlComponent,
    StudentComponent,

    StudentHomeComponent,
    GuestComponent,
    GuestFooterComponent,
    GuestHeaderComponent,
    GuestHomeComponent,
    GuestResgisterAccountComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
