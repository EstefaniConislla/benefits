import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfileComponent } from './add-profile.component';
import { MAIN_ADDPROFILE } from './add-profile.routes';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ModalSuccessfulComponent } from './modal-successful/modal-successful.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AddProfileComponent, ModalSuccessfulComponent],
  providers: [MatDialog],
  imports: [
    CommonModule,
    MAIN_ADDPROFILE,
    MatExpansionModule,
    BrowserModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatChipsModule,
    PaginatorModule,
    MatIconModule,
    MatButtonModule,
    NgbAccordionModule,
  ],
  exports: [AddProfileComponent],
})
export class AddProfileModule {}
