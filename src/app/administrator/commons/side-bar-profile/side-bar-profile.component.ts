/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-profile',
  templateUrl: './side-bar-profile.component.html',
  styleUrls: ['./side-bar-profile.component.scss'],
})
export class SideBarProfileComponent {
  adminProfile: any = [
    {
      icon: '/assets/icono/icon-profiles-1.svg',
      name: 'Solicitudes',
      route: '/solicitudes',
    },
    {
      icon: '/assets/icono/icon-profiles-2.svg',
      name: 'Reportería',
      route: '/solicitudes',
    },
    {
      icon: '/assets/icono/icon-profiles-3.svg',
      name: 'Beneficios',
      route: 'admin/benefits',
    },
    {
      icon: '/assets/icono/icon-profiles-4.svg',
      name: 'Categorías',
      route: '/solicitudes',
    },
    {
      icon: '/assets/icono/icon-profiles-5.svg',
      name: 'Usuarios',
      route: '/solicitudes',
    },
    {
      icon: '/assets/icono/icon-profiles-6.svg',
      name: 'Perfiles administrador',
      route: 'admin/profiles',
    },
  ];

  constructor(private router: Router) {}

  selectTab(route: string) {
    console.log(route);
    this.router.navigate([route]);
  }
}
