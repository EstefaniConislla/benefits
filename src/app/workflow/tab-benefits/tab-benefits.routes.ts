import { Routes, RouterModule } from '@angular/router';
import { TabBenefitsComponent } from './tab-benefits.component';

const TabBenefitsRoutes: Routes = [
  {
    path: '',
    component: TabBenefitsComponent,
  },
];

export const MAIN_TABBENEFITS = RouterModule.forChild(TabBenefitsRoutes);
