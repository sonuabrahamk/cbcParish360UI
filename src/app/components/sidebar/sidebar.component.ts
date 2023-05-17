import { Component, Input, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { INavbarData } from './submenu';
import { GlobalSettings } from 'src/app/services/global-settings';
import { Profile } from 'src/app/services/oidc-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() subMenuCollapsed = false;
  navData = navbarData;
  multiple: boolean = false;
  profile: Profile | undefined;

  constructor() {}

  ngOnInit() {}

  ngAfterContentChecked() {
    this.profile = GlobalSettings.profile;
  }

  getSideNavClass(): string {
    let styleClass = 'sidebar-collapsed';
    if (this.collapsed) {
      styleClass = 'sidebar';
    }
    return styleClass;
  }

  handleClick(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
