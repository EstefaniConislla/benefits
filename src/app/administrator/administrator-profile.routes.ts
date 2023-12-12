import { Routes, RouterModule } from '@angular/router';
import { AdministratorProfileComponent } from './administrator-profile.component';
import { AdministratorProfileRoutesChildren } from './routes/administrator-profile-routes.enum';
import { TabProfilesComponent } from './tab-profiles/tab-profiles.component';
import { TabBenefitsComponent } from './tab-benefits/tab-benefits.component';
import { ProfileTableComponent } from './commons/profile-table/profile-table.component';

const AdminProfileRoutes: Routes = [
  {
    path: AdministratorProfileRoutesChildren.ADMIN,
    component: AdministratorProfileComponent,
  },
  {
    path: AdministratorProfileRoutesChildren.TAB_PROFILE,
    component: ProfileTableComponent,
  },
  {
    path: AdministratorProfileRoutesChildren.TAB_BENEFIT,
    component: TabBenefitsComponent,
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

/* export const ADMINISTRATOR_PROFILE_ROUTES = RouterModule.forChild(AdminProfileRoutes); */
