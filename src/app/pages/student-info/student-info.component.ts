import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  action = "read";
  studentId = "";

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      if (param['action'] != null) {
        this.action = param['action']
      }
      if(param['id'] != null) {
        this.studentId = param['id'];
      }
    })
  }

}
