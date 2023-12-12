import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorProfileComponent } from './administrator-profile.component';
import { SideBarProfileComponent } from './commons/side-bar-profile/side-bar-profile.component';
import { ProfileTableComponent } from './commons/profile-table/profile-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorModule } from '../components/paginator/paginator.module';
import { TabBenefitsComponent } from './tab-benefits/tab-benefits.component';
import { TabProfilesComponent } from './tab-profiles/tab-profiles.component';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorProfileRoutesChildren } from './routes/administrator-profile-routes.enum';


const AdminProfileRoutes: Routes = [
  {
    path: '',
    component: AdministratorProfileComponent,
  },
  {
    path: AdministratorProfileRoutesChildren.TAB_PROFILE,
    component: TabProfilesComponent,
  },
  {
    path: 'beneficios',
    component: AdministratorProfileComponent,
  },
  // {
  //   path: AdministratorProfileRoutesChildren.TAB_CATEGORY,
  //   component: ImportDistRentesegComponent,
  // },
  // {
  //   path: AdministratorProfileRoutesChildren.TAB_USERS,
  //   component: ImportDistRentesegComponent,
  // },
  // {
  //   path: AdministratorProfileRoutesChildren.TAB_REQUIRY,
  //   component: ImportDistRentesegComponent,
  // },
];


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AdministratorProfileComponent,
    SideBarProfileComponent,
    ProfileTableComponent,
    TabBenefitsComponent,
    TabProfilesComponent,
  ],
  imports: [CommonModule, MatTableModule, MatChipsModule, PaginatorModule, RouterModule.forChild(AdminProfileRoutes)],
  exports: [AdministratorProfileComponent, RouterModule,  AdministratorProfileComponent,
    SideBarProfileComponent,
    ProfileTableComponent,
    TabBenefitsComponent,
    TabProfilesComponent,],
})
export class AdministratorProfileModule {}
