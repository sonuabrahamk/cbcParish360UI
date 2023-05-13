import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CreateDioceseModalComponent } from 'src/app/components/diocese/create-diocese-modal/create-diocese-modal.component';

@Component({
  selector: 'app-parish-list',
  templateUrl: './parish-list.component.html',
  styleUrls: ['./parish-list.component.css']
})
export class ParishListComponent {

  rowData: any[] = [{
    "Diocese ID": "01H05ZM4TS0DQ27TCN7568JVTN",
    "Name": "Susanville Municipal Diocese",
    "Code": "SVE",
    "Category": "Hard Tile & Stone",
    "Director Name": "Geno Wenham",
    "Rite": "Roman Catholic",
    "Location": "Napu",
    "Contact No": "805-501-8406",
    "Email ID": "gwenham0@kickstarter.com",
    "Created By": "gwenham0",
    "Updated At": "23-03-2023"
  }, {
    "Diocese ID": "01H05ZM4TVD9E2ABSAFM3D1R26",
    "Name": "Madurai Diocese",
    "Code": "IXM",
    "Category": "Structural & Misc Steel Erection",
    "Director Name": "Karen Hutchinson",
    "Rite": "Roman Catholic",
    "Location": "Ţammūn",
    "Contact No": "231-428-4383",
    "Email ID": "khutchinson1@smugmug.com",
    "Created By": "khutchinson1",
    "Updated At": "18-03-2023"
  }, {
    "Diocese ID": "01H05ZM4TXD8423T56CYQZ9K3F",
    "Name": "Bowerman Diocese",
    "Code": "HQM",
    "Category": "Waterproofing & Caulking",
    "Director Name": "Dunstan Layman",
    "Rite": "Roman Catholic",
    "Location": "Villa Alemana",
    "Contact No": "842-191-8659",
    "Email ID": "dlayman2@house.gov",
    "Created By": "dlayman2",
    "Updated At": "17-09-2022"
  }, {
    "Diocese ID": "01H05ZM4TY6GG23FNH62V8AXQ8",
    "Name": "Humbert River Diocese",
    "Code": "HUB",
    "Category": "Sitework & Site Utilities",
    "Director Name": "Olympie Werendell",
    "Rite": "Latin",
    "Location": "Rudnya",
    "Contact No": "335-348-9106",
    "Email ID": "owerendell3@4shared.com",
    "Created By": "owerendell3",
    "Updated At": "01-11-2022"
  }, {
    "Diocese ID": "01H05ZM4TZRTHKF3AQEXFTXX7Z",
    "Name": "Boise Air Terminal/Gowen Field",
    "Code": "BOI",
    "Category": "Exterior Signage",
    "Director Name": "Ximenez Hollyard",
    "Rite": "Latin",
    "Location": "Dalmeny",
    "Contact No": "185-503-6104",
    "Email ID": "xhollyard4@live.com",
    "Created By": "xhollyard4",
    "Updated At": "30-01-2023"
  }, {
    "Diocese ID": "01H05ZM4V1Q7C0XV8J62AZ23GX",
    "Name": "Lai Diocese",
    "Code": "LTC",
    "Category": "Fire Sprinkler System",
    "Director Name": "Eula Worts",
    "Rite": "Latin",
    "Location": "San Pedro",
    "Contact No": "143-364-3673",
    "Email ID": "eworts5@flickr.com",
    "Created By": "eworts5",
    "Updated At": "08-10-2022"
  }, {
    "Diocese ID": "01H05ZM4V21R3A0GG87P3W6N7J",
    "Name": "Hartsville Regional Diocese",
    "Code": "HVS",
    "Category": "Drywall & Acoustical (FED)",
    "Director Name": "Catlin Helleker",
    "Rite": "Roman Catholic",
    "Location": "Amiens",
    "Contact No": "906-457-9346",
    "Email ID": "chelleker6@netvibes.com",
    "Created By": "chelleker6",
    "Updated At": "27-01-2023"
  }, {
    "Diocese ID": "01H05ZM4V3PGP38H2MDZ3F9VP3",
    "Name": "Loen Diocese",
    "Code": "LOF",
    "Category": "Temp Fencing, Decorative Fencing and Gates",
    "Director Name": "Claudetta Creech",
    "Rite": "Roman Catholic",
    "Location": "Pende",
    "Contact No": "205-758-2020",
    "Email ID": "ccreech7@tripod.com",
    "Created By": "ccreech7",
    "Updated At": "13-03-2023"
  }, {
    "Diocese ID": "01H05ZM4V4GFNAJ10W2K5CDYNK",
    "Name": "Eastland Municipal Diocese",
    "Code": "ETN",
    "Category": "Exterior Signage",
    "Director Name": "Nertie Dightham",
    "Rite": "Latin",
    "Location": "Leninsk",
    "Contact No": "334-782-1134",
    "Email ID": "ndightham8@deliciousdays.com",
    "Created By": "ndightham8",
    "Updated At": "05-06-2022"
  }, {
    "Diocese ID": "01H05ZM4V6KWG4MRD1EJJVAM0E",
    "Name": "Larsen Bay Diocese",
    "Code": "KLN",
    "Category": "Curb & Gutter",
    "Director Name": "Yancey Shellcross",
    "Rite": "Latin",
    "Location": "Kurów",
    "Contact No": "298-226-5987",
    "Email ID": "yshellcross9@icio.us",
    "Created By": "yshellcross9",
    "Updated At": "01-11-2022"
  }];

  colDefs: ColDef[] = [
    { 
      field: 'Diocese ID',
      cellRenderer: CreateDioceseModalComponent
    },
    { field: 'Name'},
    { field: 'Code'},
    { field: 'Category'},
    { field: 'Director Name'},
    { field: 'Rite'},
    { field: 'Location'},
    { field: 'Contact No'},
    { field: 'Email ID'},
    { field: 'Created By'},
    { field: 'Updated At'},
  ];

  defaultColDefs: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  }

}
