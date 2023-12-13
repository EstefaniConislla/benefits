import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SingleBenefitsModule } from './benefits/single-benefits.module';
import { TabProfilesModule } from './tab-profiles/tab-profiles.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [SingleBenefitsModule, TabProfilesModule],
  exports: [],
})
export class WorkflowModule {}
