import { AuthConfig } from 'angular-oauth2-oidc';

export const IdpConfig: AuthConfig = {
  issuer: 'https://copec-sa.fusionauth.io',
  clientId: '02a01857-3c29-44a0-9f5c-465015c5dc10',
  responseType: 'code',
  redirectUri: window.location.origin + '/home',
  logoutUrl: window.location.origin + '/logout',
  scope: 'openid profile email offline_access',
  timeoutFactor: 0.09,
  strictDiscoveryDocumentValidation: true,
  showDebugInformation: true,
};
