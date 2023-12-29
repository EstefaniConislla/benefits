import { Component, OnInit } from '@angular/core';
import { TabProfilesComponent } from '../../tab-profiles/tab-profiles.component';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-search-profile',
  templateUrl: './modal-search-profile.component.html',
  styleUrls: ['./modal-search-profile.component.scss'],
})
export class ModalSearchProfileComponent implements OnInit {
  control = new FormControl('');
  streets: string[] = [
    'Isabella Andrea González Pinto',
    'Camila Elisa Pérez Gatica',
    'Felipe Andrés Donos Sáez',
    'Joaquín Enrique Martínez Mena',
    'Matías Alfonso Suárez Tapia',
    'Susana Linda Brown Concha',
  ];

  filteredStreets!: Observable<string[]>;

  constructor(
    private dialogRef: MatDialogRef<TabProfilesComponent>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value || '')),
    );
  }

  filter(value: string): string[] {
    const filterValue = this.normalizeValue(value);
    return this.streets.filter((street) =>
      this.normalizeValue(street).includes(filterValue),
    );
  }

  normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  closeModal() {
    this.dialogRef.close();
  }

  goInfoProfile() {
    this.router.navigateByUrl('admin/profiles/add-profile');
  }
}
