import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {

  @Input() permission = 'read';
  @Input() student = '';
  studentInfo: any | undefined;
  disabled: boolean = true;

  constructor() {}

  ngOnInit(): void {
    if(this.permission != 'edit' && this.permission != 'create'){
      this.permission = 'read';
    }
    if(this.permission != 'read'){
      this.disabled = false;
    }
    if(this.student != ''){
      this.studentInfo = {
        "RollNo": 1,
        "Full Name": "Oralie Andreini",
        "Class": 1,
        "Division": null,
        "Parish": "Bernita",
        "Forane": "Oralie",
        "Diocese": "156.206.210.251",
        "Contact No": "0954990099",
        "Email": "oandreini0@hp.com"
      };
    }
  }

  createStudent(data: any) {
    alert(JSON.stringify(data));
  }
}
