/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar-profile',
  templateUrl: './side-bar-profile.component.html',
  styleUrls: ['./side-bar-profile.component.scss'],
})
export class SideBarProfileComponent implements OnInit {
  isSizeMobile = false;
  adminProfile: any = [
    {
      icon: '/assets/icono/icon-profiles-1.svg',
      name: 'Solicitudes',
      route: 'admin/benefits',
    },
    {
      icon: '/assets/icono/icon-profiles-2.svg',
      name: 'Reportería',
      route: 'admin/benefits',
    },
    {
      icon: '/assets/icono/icon-profiles-3.svg',
      name: 'Beneficios',
      route: 'admin/benefits',
    },
    {
      icon: '/assets/icono/icon-profiles-4.svg',
      name: 'Categorías',
      route: 'admin/categories',
    },
    {
      icon: '/assets/icono/icon-profiles-5.svg',
      name: 'Usuarios',
      route: 'admin/users',
    },
    {
      icon: '/assets/icono/icon-profiles-6.svg',
      name: 'Perfiles administrador',
      route: 'admin/profiles/profile-table',
    },
  ];

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {}

  async ngOnInit(): Promise<void> {
    const sizeMobile = this.breakpointObserver.observe(['(max-width: 768px)']);
    sizeMobile.subscribe((lay) => {
      this.isSizeMobile = lay.breakpoints['(max-width: 768px)'];
    });
  }

  selectTab(route: string) {
    console.log(route);
    this.router.navigate([route]);
  }
}
