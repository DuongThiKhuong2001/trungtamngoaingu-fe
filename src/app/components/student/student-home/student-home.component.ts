import { Component, OnInit } from '@angular/core';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private taiKhoanService: TaiKhoanService,
    private router: Router) { }

  ngOnInit(): void {
    // Fetch student information from the service

  }
  test(){
    this.router.navigate(["/sinh-vien/test"])
  }

}
