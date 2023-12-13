/* eslint-disable @typescript-eslint/no-explicit-any */
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { CommmonService } from 'src/app/utils/common.service';

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
  antiques: any = [];
  beneficiaryTypes: any = [];
  selectedAntiquies: any = [];
  selectedPlans: any = [];
  selectedBeneficiaryTypes: any = [];
  public countBenefit = 0;

  iconColor = '';

  @Output() filterClose = new EventEmitter<boolean>();
  @Output() dataSended = new EventEmitter<any>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private categoriesService: CategoriesService,
    private commonService: CommmonService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getFilters();
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

  async getFilters() {
    this.categories = this.commonService.sortArray(
      (await this.categoriesService.getCategories()) ?? [],
    );
    this.antiques = this.commonService.sortArray(
      (await this.categoriesService.getAntiques()) ?? [],
    );
    this.plans = this.commonService.sortArray(
      (await this.categoriesService.getPlans()) ?? [],
    );
    this.beneficiaryTypes = this.commonService.sortArray(
      (await this.categoriesService.getBeneficiaryTypes()) ?? [],
    );
    this.countBenefit = JSON.parse(
      this.commonService.getItemLocalStorage('benefits') ?? '[]',
    ).length;

    this.commonService.removeItemLocalStorage('categories');
    this.commonService.removeItemLocalStorage('antiques');
    this.commonService.removeItemLocalStorage('plans');
    this.commonService.removeItemLocalStorage('beneficiaryTypes');

    this.commonService.removeItemLocalStorage('categories');
    this.commonService.removeItemLocalStorage('antiques');
    this.commonService.removeItemLocalStorage('plans');
    this.commonService.removeItemLocalStorage('beneficiaryTypes');

    this.commonService.setItemLocalStorage(
      'categories',
      JSON.stringify(this.categories),
    );
    this.commonService.setItemLocalStorage(
      'antiques',
      JSON.stringify(this.antiques),
    );
    this.commonService.setItemLocalStorage('plans', JSON.stringify(this.plans));
    this.commonService.setItemLocalStorage(
      'beneficiaryTypes',
      JSON.stringify(this.beneficiaryTypes),
    );
  }
}
