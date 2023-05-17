import { Component } from '@angular/core';
import { OidcServiceService } from './services/oidc-service.service';

interface SidebarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cbcParish360UI';
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private readonly oidc: OidcServiceService) {}

  isLoggedIn(): boolean {
    return this.oidc.isLoggedIn();
  }

  onToggleSidebar(data: SidebarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
