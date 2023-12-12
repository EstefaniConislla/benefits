import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-profile',
  templateUrl: './side-bar-profile.component.html',
  styleUrls: ['./side-bar-profile.component.scss'],
})
export class SideBarProfileComponent {
  adminProfile = [
    { icon: '/assets/icono/icon-profiles-1.svg', name: 'Solicitudes' },
    { icon: '/assets/icono/icon-profiles-2.svg', name: 'Reportería' },
    { icon: '/assets/icono/icon-profiles-3.svg', name: 'Beneficios' },
    { icon: '/assets/icono/icon-profiles-4.svg', name: 'Categorías' },
    { icon: '/assets/icono/icon-profiles-5.svg', name: 'Usuarios' },
    {
      icon: '/assets/icono/icon-profiles-6.svg',
      name: 'Perfiles administrador',
    },
  ];
}
