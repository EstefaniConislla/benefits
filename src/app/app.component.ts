import { Component } from '@angular/core';
import { IdpService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  status = false;
  constructor(private _idpService: IdpService) {
    this._idpService.admin.subscribe((status) => {
      const evalue = JSON.parse(localStorage.getItem('admin') || '');
      this.status = status || evalue;
    });
  }
  title = 'beneflex';

  renderComponent() {
    const userProfile = this._idpService.getUserProfile();
    return userProfile === undefined ? false : true;
  }
}
