import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-profile',
  templateUrl: './side-bar-profile.component.html',
  styleUrls: ['./side-bar-profile.component.scss'],
})
export class SideBarProfileComponent {
  adminProfile: any = [
    { icon: '/assets/icono/icon-profiles-1.svg', name: 'Solicitudes', link: '/solicitudes' },
    { icon: '/assets/icono/icon-profiles-2.svg', name: 'Reportería', link: 'beneficios' },
    { icon: '/assets/icono/icon-profiles-3.svg', name: 'Beneficios', link: 'beneficios' },
    { icon: '/assets/icono/icon-profiles-4.svg', name: 'Categorías', link: '/categorías' },
    { icon: '/assets/icono/icon-profiles-5.svg', name: 'Usuarios', link: '/perfiles' },
    {
      icon: '/assets/icono/icon-profiles-6.svg',
      name: 'Perfiles administrador',
      link: '/Usuarios'
    },
  ];
}
