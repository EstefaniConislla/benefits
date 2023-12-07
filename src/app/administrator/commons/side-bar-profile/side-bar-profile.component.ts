import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-profile',
  templateUrl: './side-bar-profile.component.html',
  styleUrls: ['./side-bar-profile.component.scss'],
})
export class SideBarProfileComponent {
  adminProfile = [
    { icon: '/assets/icono/icon-todos.svg', name: 'Solicitudes' },
    { icon: '/assets/icono/icon-asesoria.svg', name: 'Reportería' },
    { icon: '/assets/icono/icon-financiera.svg', name: 'Beneficios' },
    { icon: '/assets/icono/icon-bienestar.svg', name: 'Categorías' },
    { icon: '/assets/icono/icon-descuentos.svg', name: 'Usuarios' },
    {
      icon: '/assets/icono/icon-descuentos.svg',
      name: 'Perfiles administrador',
    },
  ];
}
