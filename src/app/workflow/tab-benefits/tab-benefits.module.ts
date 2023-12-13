import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBenefitsComponent } from './tab-benefits.component';
import { MAIN_TABBENEFITS } from './tab-benefits.routes';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabBenefitsComponent],
  imports: [
    CommonModule,
    MAIN_TABBENEFITS,
    MatTableModule,
    MatChipsModule,
    PaginatorModule,
  ],
  exports: [TabBenefitsComponent],
})
export class TabBenefitsModule {}
