/* eslint-disable @typescript-eslint/no-explicit-any */
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Benefits } from '../models/benefts.interface';
import { BenefitsService } from '../services/benefits.service';
import { Router } from '@angular/router';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent implements OnInit {
  @ViewChild(PaginatorComponent, { static: false }) childC!: PaginatorComponent;

  isSizeMobile = false;
  showFilterMobile = false;
  benefits!: Benefits[];
  searchTerm = '';
  currentPage = 1;
  totalPages!: number;
  totalRows!: number;
  paginatedCards!: Benefits[];
  selectedSortOption = 'order';
  itemsPerPage = 15;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private benefitsService: BenefitsService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    const oritentation = this.breakpointObserver.observe([
      '(max-width: 768px)',
    ]);
    oritentation.subscribe((lay) => {
      this.isSizeMobile = lay.breakpoints['(max-width: 768px)'];
    });
    localStorage.removeItem('benefits');
    this.benefits = await this.benefitsService.getBenefits();
    localStorage.setItem('benefits', JSON.stringify(this.benefits));
    this.totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);
    this.totalRows = this.benefits.length;
    this.paginateCards(1, this.benefits);
  }

  filterBenefits(data: any) {
    this.benefits = JSON.parse(localStorage.getItem('benefits') ?? '');
    switch (data.type) {
      case 'category':
        this.filterBenefitsByCategories(data);
        break;
      // case 'antiquity':
      // this.filterBenefitsByAntiquies(data);
      // break;
      case 'plan':
        this.filterBenefitsByPlans(data);
        break;
      case 'beneficiaryType':
        this.filterBenefitsByBeneficiaryTypes(data);
        break;
    }
    this.childC.getNumberPages(this.currentPage, this.totalPages);
  }

  paginateCards(page: number, benefits: Benefits[]) {
    this.paginatedCards = benefits.slice(
      (page - 1) * this.itemsPerPage,
      page * this.itemsPerPage,
    );
  }

  onSearch() {
    this.benefits = JSON.parse(localStorage.getItem('benefits') ?? '');
    if (this.searchTerm.length >= 4) {
      this.paginatedCards = this.benefits.filter((benefit) =>
        benefit.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
      this.totalPages = Math.ceil(
        this.paginatedCards.length / this.itemsPerPage,
      );
      if (this.paginatedCards.length === 0) this.benefits = [];
      this.paginateCards(1, this.paginatedCards);
    } else {
      this.totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);
      this.paginateCards(1, this.benefits);
    }

    this.childC.getNumberPages(this.currentPage, this.totalPages);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.paginateCards(page, this.benefits);
  }

  showModalFilter() {
    this.showFilterMobile = true;
  }

  getStatusModalFilter(status: boolean) {
    this.showFilterMobile = status;
  }

  /*onSortChange() {
    const ordererCards$ = this.sortCards(this.cards$, this.selectedSortOption);
    this.paginateCards(1, ordererCards$);
  }*/

  sortCards(
    cards$: Observable<Benefits[]>,
    sortBy: string,
  ): Observable<Benefits[]> {
    return cards$.pipe(
      map((cards) => {
        if (sortBy === 'name') {
          return cards.slice().sort((a, b) => a.title.localeCompare(b.title));
        } else {
          return [...cards];
        }
      }),
    );
  }

  goToBenefit() {
    // const cardId = 123;
    this.router.navigate(['/benefits']);
    // this.router.navigate(['/benefits', cardId]);
  }

  filterBenefitsByCategories(data: any) {
    if (data.id === -1) {
      this.totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);
      this.paginateCards(1, this.benefits);
    } else {
      const newBenefits: Benefits[] = [];
      this.benefits.forEach((benefit) => {
        if (benefit.categories.includes(data.id)) newBenefits.push(benefit);
      });
      this.totalPages = Math.ceil(newBenefits.length / this.itemsPerPage);
      this.benefits = newBenefits;
      this.paginateCards(1, newBenefits);
    }
  }

  // filterBenefitsByAntiquies(data: any) {
  //     if (data.values.length === 0) {
  //     this.totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);
  //    this.paginateCards(1, this.benefits);
  //    } else {
  //     const benefitFiltered = this.benefits.filter((benefit) =>
  //       benefit.antiques.some((id: any) => data.values.includes(id)),
  //      );
  //     this.totalPages = Math.ceil(benefitFiltered.length / this.itemsPerPage);

  //     if (benefitFiltered.length === 0) this.benefits = [];

  //     this.paginateCards(1, benefitFiltered);
  //   }
  // }

  filterBenefitsByPlans(data: any) {
    if (data.values.length === 0) {
      this.totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);
      this.paginateCards(1, this.benefits);
    } else {
      const benefitFiltered = this.benefits.filter((benefit) =>
        benefit.plans.some((id: any) => data.values.includes(id)),
      );
      this.totalPages = Math.ceil(benefitFiltered.length / this.itemsPerPage);

      if (benefitFiltered.length === 0) this.benefits = [];

      this.paginateCards(1, benefitFiltered);
    }
  }

  filterBenefitsByBeneficiaryTypes(data: any) {
    if (data.values.length === 0) {
      this.totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);
      this.paginateCards(1, this.benefits);
    } else {
      const benefitFiltered = this.benefits.filter((benefit) =>
        benefit.beneficiaryTypes.some((id: any) => data.values.includes(id)),
      );
      this.totalPages = Math.ceil(benefitFiltered.length / this.itemsPerPage);

      if (benefitFiltered.length === 0) this.benefits = [];

      this.paginateCards(1, benefitFiltered);
    }
  }
}
