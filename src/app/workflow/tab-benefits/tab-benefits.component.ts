/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
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
  selector: 'app-tab-benefits',
  templateUrl: './tab-benefits.component.html',
  styleUrls: ['./tab-benefits.component.scss'],
})
export class TabBenefitsComponent {
  @ViewChild(PaginatorComponent, { static: false }) childC!: PaginatorComponent;

  currentPage = 1;
  totalPages!: number;
  itemsPerPage = 15;
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'rut',
    'typeUser',
    'status',
    'status2',
  ];
  dataSource = ELEMENT_DATA;

  onPageChange(page: any) {
    this.currentPage = page;
  }
}
