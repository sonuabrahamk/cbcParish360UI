import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-tabs',
  templateUrl: './student-tabs.component.html',
  styleUrls: ['./student-tabs.component.css'],
})
export class StudentTabsComponent implements OnInit {

  @Input() permission = 'read';
  @Input() student = '';

  constructor() {}

  ngOnInit(): void {
  }
}
