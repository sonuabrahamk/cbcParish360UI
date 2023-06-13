import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Injectable, OnInit } from '@angular/core';
import { GlobalSettings } from './global-settings';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '1074368858601-o7uovfkkba6lfukh6tu5hktv1vvbm7pb.apps.googleusercontent.com',
  scope: 'openid profile email',
};

export interface Profile {
  info: {
    sub: string;
    name: string;
    email: string;
    given_name: string;
    family_name: string;
    picture: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class OidcServiceService {
  userProfileSubject = new Subject<Profile>();
  userRoles: string[] = [];
  userPermissions: string[] = [];

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    this.login();
  }

  login() {
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(async () => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as Profile);
            const profile = JSON.parse(JSON.stringify(userProfile));
            GlobalSettings.profile = profile;
          });
          await this.checkUserPermissions();
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signOut(): void {
    this.oAuthService.logOut();
  }

  async checkUserPermissions(): Promise<void> {
    if (GlobalSettings.profile.info.email === 'sonu.abrahamk@gmail.com') {
      this.userRoles = ['admin'];
      this.userPermissions = ['view', 'edit'];
    }
  }
}
