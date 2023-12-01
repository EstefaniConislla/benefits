/* eslint-disable @typescript-eslint/no-explicit-any */
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  isExpanded = true;
  isSizeMobile = false;
  categories: any = [];
  plans: any = [];
  antiquies: any = [];
  selectedAntiquies: any = [];
  selectedPlans: any = [];
  selectedBeneficiaryTypes: any = [];

  beneficiaryTypes = [
    { id: 1, description: 'Beneficios para mí' },
    { id: 2, description: 'Beneficios para mi pareja' },
    { id: 3, description: 'Beneficios para mi familia' },
    { id: 4, description: 'Beneficios para mis hijos' },
  ];

  iconColor = '';

  @Output() filterClose = new EventEmitter<boolean>();
  @Output() dataSended = new EventEmitter<any>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private categoriesService: CategoriesService,
  ) {}

  async ngOnInit(): Promise<void> {
    const responseCategories = await this.categoriesService.getCategories();
    const responseAntiquies = await this.categoriesService.getAntiquies();
    const responsePlans = await this.categoriesService.getPlans();
    this.categories = responseCategories;
    this.antiquies = responseAntiquies;
    this.plans = responsePlans;
    const oritentation = this.breakpointObserver.observe([
      '(max-width: 768px)',
    ]);
    oritentation.subscribe((lay) => {
      this.isSizeMobile = lay.breakpoints['(max-width: 768px)'];
      if (this.isSizeMobile) {
        this.isExpanded = true;
      }
    });
  }

  closeFilter() {
    this.filterClose.emit(false);
  }

  filterBenefitsByCategory(data: any) {
    data.type = 'category';
    this.dataSended.emit(data);
  }

  filterBenefitsByAntiquity(event: any) {
    if (event.target.checked) {
      this.selectedAntiquies.push(parseInt(event.target.id));
    } else {
      this.selectedAntiquies = this.selectedAntiquies.filter(
        (sa: any) => sa !== parseInt(event.target.id),
      );
    }
    const data = {
      type: 'antiquity',
      values: this.selectedAntiquies,
    };
    this.dataSended.emit(data);
  }

  filterBenefitsByPlan(event: any) {
    if (event.target.checked) {
      this.selectedPlans.push(parseInt(event.target.id));
    } else {
      this.selectedPlans = this.selectedPlans.filter(
        (sa: any) => sa !== parseInt(event.target.id),
      );
    }
    const data = {
      type: 'plan',
      values: this.selectedPlans,
    };
    this.dataSended.emit(data);
  }

  filterBenefitsByBeneficiaryTypes(event: any) {
    if (event.target.checked) {
      this.selectedBeneficiaryTypes.push(parseInt(event.target.id));
    } else {
      this.selectedBeneficiaryTypes = this.selectedBeneficiaryTypes.filter(
        (sa: any) => sa !== parseInt(event.target.id),
      );
    }
    const data = {
      type: 'beneficiaryType',
      values: this.selectedBeneficiaryTypes,
    };
    this.dataSended.emit(data);
  }
}
