import { Component } from '@angular/core';
import { IdpService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private _idpService: IdpService) {}

  renderComponent() {
    this._idpService.admin.next(false);
    localStorage.setItem('admin', 'false');
    const userProfile = this._idpService.getUserProfile();
    return userProfile === undefined ? false : true;
  }
}
