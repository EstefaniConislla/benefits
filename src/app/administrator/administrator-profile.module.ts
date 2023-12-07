import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorProfileComponent } from './administrator-profile.component';
import { SideBarProfileComponent } from './commons/side-bar-profile/side-bar-profile.component';
import { ProfileTableComponent } from './commons/profile-table/profile-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AdministratorProfileComponent,
    SideBarProfileComponent,
    ProfileTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    AdministratorProfileComponent
  ],
})
export class AdministratorProfileModule {}
