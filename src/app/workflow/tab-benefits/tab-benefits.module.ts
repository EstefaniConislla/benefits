import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBenefitsComponent } from './tab-benefits.component';
import { MAIN_TABBENEFITS } from './tab-benefits.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabBenefitsComponent],
  imports: [CommonModule, MAIN_TABBENEFITS],
  exports: [TabBenefitsComponent],
})
export class TabBenefitsModule {}
