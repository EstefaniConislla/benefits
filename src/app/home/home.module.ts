import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreadcrumbModule } from '../components/breadcrumb/breadcrumb.module';
import { CardBenefitModule } from '../components/card-benefit/card-benefit.module';
import { PaginatorModule } from '../components/paginator/paginator.module';
import { HeaderComponent } from './header/header.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent,
    CategoriesComponent,
    HeaderComponent,
    BenefitsComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    HttpClientModule,
    BreadcrumbModule,
    CardBenefitModule,
    PaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
