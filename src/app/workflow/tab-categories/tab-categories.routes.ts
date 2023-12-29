import { Routes, RouterModule } from '@angular/router';
import { TabCategoriesComponent } from './tab-categories.component';

const TabCategoriesRoutes: Routes = [
  {
    path: '',
    component: TabCategoriesComponent,
  },
];

export const MAIN_TABCATEGORIES = RouterModule.forChild(TabCategoriesRoutes);
