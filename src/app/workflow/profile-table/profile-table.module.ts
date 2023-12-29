import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { MatIconModule } from '@angular/material/icon';
import { ProfileTableComponent } from './profile-table.component';
import { TAB_PROFILE } from './profile-table.routes';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ProfileTableComponent],
  providers: [MatDialog],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatChipsModule,
    PaginatorModule,
    MatIconModule,
    TAB_PROFILE,
  ],
  exports: [ProfileTableComponent],
})
export class ProfileTableModule {}
