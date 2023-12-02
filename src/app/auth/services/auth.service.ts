import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IdpConfig } from '../config/auth.config';

@Injectable({
  providedIn: 'root',
})
export class IdpService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private userProfile!: any;

  constructor(private readonly oauthService: OAuthService) {
  /*   this.configure(); */
  }

  private configure() {
    console.log('Configure...');
    this.oauthService.configure(IdpConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then((value) => {
      if (value) {
        this.oauthService.loadUserProfile().then((value) => {
          console.log(typeof value);
          this.userProfile = value;
        });
      }
    });
  }

  logout() {
    this.userProfile = null;
    this.oauthService.logOut();
  }

  getUserProfile() {
    return this.userProfile;
  }
}
