import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorProfileComponent } from './administrator-profile.component';
import { SideBarProfileComponent } from './commons/side-bar-profile/side-bar-profile.component';
import { ProfileTableComponent } from './commons/profile-table/profile-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from '../components/paginator/paginator.module';
import { RouterModule } from '@angular/router';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AdministratorProfileComponent,
    SideBarProfileComponent,
    ProfileTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatChipsModule,
    PaginatorModule,
  ],
  exports: [
    AdministratorProfileComponent,
    SideBarProfileComponent,
    ProfileTableComponent,
  ],
})
export class AdministratorProfileModule {
  static forRoot(): ModuleWithProviders<AdministratorProfileModule> {
    return {
      ngModule: AdministratorProfileModule,
      providers: [],
    };
  }
}
