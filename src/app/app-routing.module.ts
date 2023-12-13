import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministratorProfileComponent } from './administrator/administrator-profile.component';
import { SingleBenefitsComponent } from './workflow/benefits/single-benefits.component';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'home',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
//   {
//     path: 'benefits',
//     component: SingleBenefitsComponent,
//   },
//   {
//     path: 'admin',
//     // canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./administrator/administrator-profile.module').then(
//         (m) => m.AdministratorProfileModule,
//       ),
//   },
// ];

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'benefits',
    component: SingleBenefitsComponent,
  },
  {
    path: 'admin',
    component: AdministratorProfileComponent,
    children: [
      {
        path: 'profiles',
        loadChildren: () =>
          import('./workflow/tab-profiles/tab-profiles.module').then(
            (m) => m.TabProfilesModule,
          ),
      },
      {
        path: 'benefits',
        loadChildren: () =>
          import('./workflow/tab-benefits/tab-benefits.module').then(
            (m) => m.TabBenefitsModule,
          ),
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
