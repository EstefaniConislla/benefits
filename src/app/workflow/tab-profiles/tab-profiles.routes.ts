import { Routes, RouterModule } from '@angular/router';
import { TabProfilesComponent } from './tab-profiles.component';

const TabProfilesRoutes: Routes = [
  {
    path: '',
    component: TabProfilesComponent,
  },
];

export const MAIN_TABPROFILES = RouterModule.forChild(TabProfilesRoutes);
