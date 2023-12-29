import { Routes, RouterModule } from '@angular/router';
import { ProfileTableComponent } from './profile-table.component';

const TabProfilesRoutes: Routes = [
  {
    path: '',
    component: ProfileTableComponent,
  },
];

export const TAB_PROFILE = RouterModule.forChild(TabProfilesRoutes);
