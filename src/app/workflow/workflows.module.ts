import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SingleBenefitsModule } from './benefits/single-benefits.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [SingleBenefitsModule],
})
export class WorkflowModule {}
