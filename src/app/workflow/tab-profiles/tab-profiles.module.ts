import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabProfilesComponent } from './tab-profiles.component';
import { MAIN_TABPROFILES } from './tab-profiles.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabProfilesComponent],
  imports: [CommonModule, MAIN_TABPROFILES],
  exports: [TabProfilesComponent],
})
export class TabProfilesModule {}
