import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabCategoriesComponent } from './tab-categories.component';
import { MAIN_TABCATEGORIES } from './tab-categories.routes';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabCategoriesComponent],
  imports: [
    CommonModule,
    MAIN_TABCATEGORIES,
    MatTableModule,
    MatChipsModule,
    PaginatorModule,
    MatIconModule,
  ],
  exports: [TabCategoriesComponent],
})
export class TabCategoriesModule {}
