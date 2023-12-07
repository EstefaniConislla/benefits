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

  getUserProfile(atributo: string) {
    return this._idpService.getUserProfile()['info'][atributo] === undefined ? false : true;
  }
}
