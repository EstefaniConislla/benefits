import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  rut: string;
  typeUser: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 3464312,
    name: 'Isabella Andrea González Pinto',
    email: 'isabella@mail.com',
    rut: '17.695.490-5',
    typeUser: 'Practicante',
    status: 'Activo',
  },
  {
    id: 5674356,
    name: 'Camila Elisa Pérez Gatica',
    email: 'felipe@mail.com',
    rut: '17.695.490-5',
    typeUser: 'Practicante',
    status: 'Inactivo',
  },
  {
    id: 3464312,
    name: 'Felipe Andrés Donos Sáez',
    email: 'felipe@mail.com',
    rut: '17.695.490-5',
    typeUser: 'Practicante',
    status: 'Activo',
  },
  {
    id: 5674356,
    name: 'Joaquín Enrique Martínez Mena',
    email: 'isabella@mail.com',
    rut: '7.695.490-0',
    typeUser: 'Jubilado',
    status: 'Activo',
  },
  {
    id: 3464312,
    name: 'Matías Alfonso Suárez Tapia',
    email: 'felipe@mail.com',
    rut: '7.695.490-0',
    typeUser: 'Practicante',
    status: 'Inactivo',
  },
  {
    id: 5674356,
    name: 'Susana Linda Brown Concha',
    email: 'isabella@mail.com',
    rut: '17.695.490-5',
    typeUser: 'Jubilado',
    status: 'Activo',
  },
  {
    id: 3464312,
    name: 'Felipe Andrés Donos Sáez',
    email: 'felipe@mail.com',
    rut: '17.695.490-5',
    typeUser: 'Practicante',
    status: 'Activo',
  },
  {
    id: 3464312,
    name: 'Susana Linda Brown Concha',
    email: 'isabella@mail.com',
    rut: '7.695.490-0',
    typeUser: 'Jubilado',
    status: 'Inactivo',
  },
  {
    id: 3464312,
    name: 'Isabella Andrea González Pinto',
    email: 'felipe@mail.com',
    rut: '17.695.490-5',
    typeUser: 'Practicante',
    status: 'Activo',
  },
  {
    id: 3464312,
    name: 'Camila Elisa Pérez Gatica',
    email: 'isabella@mail.com',
    rut: '7.695.490-0',
    typeUser: 'Jubilado',
    status: 'Inactivo',
  },
];

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss'],
})
export class ProfileTableComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'rut',
    'typeUser',
    'status',
  ];
  dataSource = ELEMENT_DATA;
}
