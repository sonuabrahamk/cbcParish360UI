import { Component, OnInit } from '@angular/core';
import { CheckboxSelectionComponent, ColDef, ICellRenderer, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rowData: any[] = [{
    "RollNo": 1,
    "Full Name": "Oralie Andreini",
    "Class": 1,
    "Division": null,
    "Parish": "Bernita",
    "Forane": "Oralie",
    "Diocese": "156.206.210.251",
    "Contact No": "0954990099",
    "Email": "oandreini0@hp.com"
  }, {
    "RollNo": 2,
    "Full Name": "Dom Phin",
    "Class": 2,
    "Division": null,
    "Parish": "Billie",
    "Forane": "Dom",
    "Diocese": "117.87.70.177",
    "Contact No": "9679913031",
    "Email": "dphin1@sourceforge.net"
  }, {
    "RollNo": 3,
    "Full Name": "Jesselyn Durrance",
    "Class": 3,
    "Division": null,
    "Parish": "Josy",
    "Forane": "Jesselyn",
    "Diocese": "195.4.187.41",
    "Contact No": "2181125325",
    "Email": "jdurrance2@va.gov"
  }, {
    "RollNo": 4,
    "Full Name": "Glory Soreau",
    "Class": 4,
    "Division": null,
    "Parish": "Charlotta",
    "Forane": "Glory",
    "Diocese": "19.110.85.63",
    "Contact No": "1937608433",
    "Email": "gsoreau3@unesco.org"
  }, {
    "RollNo": 5,
    "Full Name": "Wendall Watterson",
    "Class": 5,
    "Division": null,
    "Parish": "Liana",
    "Forane": "Wendall",
    "Diocese": "80.225.185.93",
    "Contact No": "2160457205",
    "Email": "wwatterson4@berkeley.edu"
  }, {
    "RollNo": 6,
    "Full Name": "Theo Hopewell",
    "Class": 6,
    "Division": null,
    "Parish": "Lezley",
    "Forane": "Theo",
    "Diocese": "185.4.121.11",
    "Contact No": "4918547559",
    "Email": "thopewell5@feedburner.com"
  }, {
    "RollNo": 7,
    "Full Name": "Cecile Mityushin",
    "Class": 7,
    "Division": null,
    "Parish": "Washington",
    "Forane": "Cecile",
    "Diocese": "14.210.204.41",
    "Contact No": "3277574814",
    "Email": "cmityushin6@wsj.com"
  }, {
    "RollNo": 8,
    "Full Name": "Alejandrina Stracey",
    "Class": 8,
    "Division": null,
    "Parish": "Lucias",
    "Forane": "Alejandrina",
    "Diocese": "23.81.38.11",
    "Contact No": "0702673595",
    "Email": "astracey7@sfgate.com"
  }, {
    "RollNo": 9,
    "Full Name": "Demetri Kennea",
    "Class": 9,
    "Division": null,
    "Parish": "Dara",
    "Forane": "Demetri",
    "Diocese": "192.102.13.184",
    "Contact No": "8435245012",
    "Email": "dkennea8@yolasite.com"
  }, {
    "RollNo": 10,
    "Full Name": "Riannon Arndell",
    "Class": 10,
    "Division": null,
    "Parish": "Cordie",
    "Forane": "Riannon",
    "Diocese": "96.27.82.228",
    "Contact No": "4379066665",
    "Email": "rarndell9@examiner.com"
  }];

  colDefs: ColDef[] = [
    { 
      field: 'RollNo',
      cellRenderer: (params: ICellRendererParams) => {
        return `<a href="./student-info/${params.value}/read">${params.value}</a>`;
      }
    },
    { field: 'Full Name'},
    { field: 'Class'},
    { field: 'Division'},
    { field: 'Parish'},
    { field: 'Forane'},
    { field: 'Diocese'},
    { field: 'Contact No'},
    { field: 'Email'}
  ];

  defaultColDefs: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  }

}
