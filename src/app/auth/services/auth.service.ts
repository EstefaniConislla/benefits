/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IdpConfig } from '../config/auth.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdpService {
  userProfile!: any;
  admin!: BehaviorSubject<boolean>;
  constructor(private readonly oauthService: OAuthService) {
    this.configure();
    this.admin = new BehaviorSubject<boolean>(false);
  }

  private configure() {
    this.oauthService.configure(IdpConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then((value) => {
      if (value) {
        this.oauthService.loadUserProfile().then((value) => {
          console.log(
            '%cauth.service.ts line:23 value',
            'color: #007acc;',
            value,
          );
          /*  this.admin.next(value); */
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
