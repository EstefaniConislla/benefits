import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IdpService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(
    private _idpService: IdpService,
    private router: Router,
  ) {}

  cerrarSesion() {
    this._idpService.logout();
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
    localStorage.setItem('admin', 'true');
    this._idpService.admin.next(true);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
