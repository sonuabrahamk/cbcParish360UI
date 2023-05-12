import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './submenu';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sub-navbar',
  template: `
    <ul *ngIf="expanded && data.items && data.items.length > 0"
      class="sub-navbar nav nav-pills flex-column"
    >
      <li class="nav-item" *ngFor="let item of data.items">
          <a class="nav-link"
            (click)="handleClick(item)"
            *ngIf="item.items && item.items.length > 0"
          >
              <i class={{item.icon}}></i>
              <span class="sidebar-link" *ngIf="expanded">{{item.label}}</span>
              <i *ngIf="item.items && expanded" class="menu-collapse-icon"
                [ngClass]="!item.expanded ? 'fa-solid fa-caret-right' : 'fa-solid fa-caret-down'"
              ></i>
          </a>
          <a class="nav-link" 
            *ngIf="!item.items || (item.items && item.items.length === 0)"
            [routerLink]="[item.routeLink]"
            routerLinkActive={{item.routeLink}}
            [routerLinkActiveOptions]="{exact: false}"
          >
            <i class={{item.icon}}></i>
            <span class="sidebar-link" *ngIf="expanded">{{item.label}}</span>
          </a>
          <div>
            <app-sub-navbar
              [data]="item"
              [collapsed]="collapsed"
              [multiple]="multiple"
              [expanded]="item.expanded"
            ></app-sub-navbar>
          </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.css'],
  animations: [ ]
})

export class SubNavbarComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = true;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

}
