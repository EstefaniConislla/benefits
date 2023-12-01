import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  isSizeMobile = false;
  buttonPages!: (number | string)[];
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const oritentation = this.breakpointObserver.observe([
      '(max-width: 768px)',
    ]);
    oritentation.subscribe((lay) => {
      this.isSizeMobile = lay.breakpoints['(max-width: 768px)'];
    });
    this.getNumberPages(this.currentPage, this.totalPages);
  }

  getNumberPages(start: number, end: number) {
    const maxVisiblePages = 4;
    const totalPages = end - start + 1;
    if (totalPages <= maxVisiblePages) {
      // Menos de 4 páginas, mostrar todas las páginas
      this.buttonPages = Array.from(
        { length: totalPages },
        (_, index) => start + index,
      );
    } else {
      // Más de 4 páginas, mostrar las primeras 3, '...' y la última
      const firstThreePages = Array.from(
        { length: 3 },
        (_, index) => start + index,
      );
      const showEllipsis = totalPages > 3;
      this.buttonPages = [
        ...firstThreePages,
        ...(showEllipsis ? ['...'] : []),
        end,
      ];
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
    if (this.currentPage < this.totalPages - 3) {
      this.getNumberPages(this.currentPage + 1, this.totalPages);
    }
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
    if (
      this.currentPage - 1 <= this.totalPages - 3 &&
      this.currentPage - 1 !== 0
    ) {
      this.getNumberPages(this.currentPage - 1, this.totalPages);
    }
  }

  firstPage() {
    this.goToPage(1);
    this.getNumberPages(1, this.totalPages);
  }

  lastPage() {
    this.goToPage(this.totalPages);
    if (this.totalPages > 4) {
      this.getNumberPages(this.totalPages - 3, this.totalPages);
    }
  }

  onPageChange(page: string | number) {
    if (page !== '...') {
      this.currentPage = Number(page);
      this.pageChange.emit(Number(page));
    }
  }
}
