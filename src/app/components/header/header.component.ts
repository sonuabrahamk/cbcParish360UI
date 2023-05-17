import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { OidcServiceService } from '../../services/oidc-service.service';
import { GlobalSettings } from 'src/app/services/global-settings';

interface SidebarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSidebar: EventEmitter<SidebarToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;

  constructor(private oAuthService: OidcServiceService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  logOut() {
    this.oAuthService.signOut();
  }
}
