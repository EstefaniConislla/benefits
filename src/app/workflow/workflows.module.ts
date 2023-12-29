import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SingleBenefitsModule } from './benefits/single-benefits.module';
import { TabProfilesModule } from './tab-profiles/tab-profiles.module';
import { TabBenefitsModule } from './tab-benefits/tab-benefits.module';
import { AddProfileModule } from './add-profile/add-profile.module';
import { ProfileTableModule } from './profile-table/profile-table.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    SingleBenefitsModule,
    TabProfilesModule,
    TabBenefitsModule,
    AddProfileModule,
    ProfileTableModule,
  ],
  exports: [],
})
export class WorkflowModule {}
