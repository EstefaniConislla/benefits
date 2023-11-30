import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitHeaderComponent } from './commons/benefit-header/benefit-header.component';
import { BenefitBodyComponent } from './commons/benefit-body/benefit-body.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SingleBenefitsComponent } from './single-benefits.component';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SingleBenefitsComponent,
    BenefitHeaderComponent,
    BenefitBodyComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    CurrencyPipe,
  ],
  exports: [SingleBenefitsComponent],
})
export class SingleBenefitsModule {}
