import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile.component';

const AddProfileRoutes: Routes = [
  {
    path: '',
    component: AddProfileComponent,
  },
];

export const MAIN_ADDPROFILE = RouterModule.forChild(AddProfileRoutes);
