/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';

@Component({
  selector: 'app-tab-profiles',
  templateUrl: './tab-profiles.component.html',
  styleUrls: ['./tab-profiles.component.scss'],
})
export class TabProfilesComponent {
  isSizeMobile = false;
  @ViewChild(PaginatorComponent, { static: false }) childC!: PaginatorComponent;

  constructor(public dialog: MatDialog) {}
}
