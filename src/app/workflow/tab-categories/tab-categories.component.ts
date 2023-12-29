/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { CategoriesService } from 'src/app/home/categories/services/categories.service';
import { CommmonService } from 'src/app/utils/common.service';
import { Categories } from 'src/app/home/models/categories.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-categories',
  templateUrl: './tab-categories.component.html',
  styleUrls: ['./tab-categories.component.scss'],
})

export class TabCategoriesComponent {
  @ViewChild(PaginatorComponent, { static: false }) childC!: PaginatorComponent;


  isSizeMobile = false;
  showFilterMobile = false;
  categories!: Categories[];
  searchTerm = '';
  currentPage = 1;
  totalPages!: number;
  totalRows!: number;
  selectedSortOption = 'order';
  itemsPerPage = 15;

  dataSource: any =  [];
  

  paginatedCategories!: Categories[];
  displayedColumns: string[] = [
    'icon',
    'description',
    'idcategory',
    'numberbenefit',
    'datepublication',
    'status',
    'status2',
  ];

  constructor(
    private categoriesService: CategoriesService,
    private commonService: CommmonService,
    private router: Router,
  ) {}


  async ngOnInit(): Promise<void> {
    await this.getcategories();
  }


  async getcategories() {
    this.commonService.removeItemLocalStorage('categories');
    this.categories = this.commonService.sortArray(
      (await this.categoriesService.getCategories() ) ?? [],
    );
    this.commonService.setItemLocalStorage(
      'categories',
      JSON.stringify(this.categories),
    );
    this.totalPages = Math.ceil(this.categories.length / this.itemsPerPage);
    this.totalRows = this.categories.length;
    this.paginateCategories(1, this.categories);
  }


  paginateCategories(page: number, categories: Categories[]) {
    this.paginatedCategories = categories.slice(
      (page - 1) * this.itemsPerPage,
      page * this.itemsPerPage,
    );
  }
  onPageChange(page: any) {
    this.currentPage = page;
    this.paginateCategories(page, this.categories);
  }

  searchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}



