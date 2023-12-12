import { Component } from '@angular/core';
import { IdpService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _idpService: IdpService) {}
  title = 'beneflex';

  renderComponent() {
    const userProfile = this._idpService.getUserProfile();
    return userProfile === undefined ? false : true;
  }
}
