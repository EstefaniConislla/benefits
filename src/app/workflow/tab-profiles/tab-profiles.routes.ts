import { Routes, RouterModule } from '@angular/router';
import { TabProfilesComponent } from './tab-profiles.component';

const TabProfilesRoutes: Routes = [
  {
    path: '',
    component: TabProfilesComponent,
    children: [
      {
        path: 'profile-table',
        loadChildren: () =>
          import('../profile-table/profile-table.module').then(
            (m) => m.ProfileTableModule,
          ),
      },
      {
        path: 'add-profile',
        loadChildren: () =>
          import('../add-profile/add-profile.module').then(
            (m) => m.AddProfileModule,
          ),
      },
    ],
  },
];

export const MAIN_TABPROFILES = RouterModule.forChild(TabProfilesRoutes);
