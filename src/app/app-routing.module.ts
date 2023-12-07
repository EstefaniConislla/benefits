import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleBenefitsComponent } from './workflow/benefits/single-benefits.component';
import { AdministratorProfileComponent } from './administrator/administrator-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'benefits',
    component: SingleBenefitsComponent,
  },
  {
    path: 'admin',
    component: AdministratorProfileComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
