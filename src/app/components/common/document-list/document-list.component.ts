import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() permission = 'read';
  @Input() student = '';

  constructor() { }

  ngOnInit(): void {
  }

}
