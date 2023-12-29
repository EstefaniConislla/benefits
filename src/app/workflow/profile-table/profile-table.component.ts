/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { ModalSearchProfileComponent } from './modal-search-profile/modal-search-profile.component';
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
export class ProfileTableComponent implements OnInit {
  isSizeMobile = false;
  @ViewChild(PaginatorComponent, { static: false }) childC!: PaginatorComponent;
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // dataSource = [...ELEMENT_DATA];
  // dataSource!: MatTableDataSource<any>;
  // this.dataSource = new MatTableDataSource([]);

  currentPage = 1;
  totalPages!: number;
  itemsPerPage = 5;
  totalRows!: number;
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'rut',
    'typeUser',
    'status',
    'status2',
  ];

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {}

  async ngOnInit(): Promise<void> {
    const sizeMobile = this.breakpointObserver.observe(['(max-width: 768px)']);
    sizeMobile.subscribe((lay) => {
      this.isSizeMobile = lay.breakpoints['(max-width: 768px)'];
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalSearchProfileComponent, {});
    dialogRef.afterClosed().subscribe({});
  }

  onPageChange(page: any) {
    this.currentPage = page;
  }

  searchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    const newData = [...this.dataSource.data, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.data = newData;
    this.table.renderRows();
  }

  saveData(newElement: PeriodicElement) {
    const newData = [...this.dataSource.data];
    newData.push(newElement);
    this.dataSource.data = newData;
    this.table.renderRows();
  }
}
