import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IdpService } from '../auth/services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private _idpService: IdpService) {}

  cerrarSesion() {
    this._idpService.logout();
  }
}
