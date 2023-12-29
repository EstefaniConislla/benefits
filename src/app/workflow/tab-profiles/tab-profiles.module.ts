import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabProfilesComponent } from './tab-profiles.component';
import { MAIN_TABPROFILES } from './tab-profiles.routes';
import { ModalSearchProfileComponent } from '../profile-table/modal-search-profile/modal-search-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabProfilesComponent, ModalSearchProfileComponent],
  providers: [MatDialog],
  imports: [
    CommonModule,
    MAIN_TABPROFILES,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatChipsModule,
    PaginatorModule,
    MatIconModule,
  ],
  exports: [TabProfilesComponent],
})
export class TabProfilesModule {}
