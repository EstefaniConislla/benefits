import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommmonService } from 'src/app/utils/common.service';

interface Transaction {
  item: string;
  cost: string;
}
@Component({
  selector: 'app-benefit-body',
  templateUrl: './benefit-body.component.html',
  styleUrls: ['./benefit-body.component.scss'],
})
export class BenefitBodyComponent {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Navidad', cost: '$ 43.000' },
    { item: 'Año nuevo', cost: '$ 33.000' },
    { item: '18 y/o 19 de septiembre', cost: '$ 30.000' },
    { item: '1ro de mayo', cost: '$ 26.000' },
  ];
  detail: string = '';

  constructor(
    private router: ActivatedRoute,
    private commonService: CommmonService,
  ) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params: any) => {
      const benefit = this.getBenefit(params);
      if (benefit) {
        this.detail = benefit.detail;
      }
    });
  }

  getBenefit(params: any) {
    const benefits = JSON.parse(
      this.commonService.getItemLocalStorage('benefits') ?? '[]',
    );
    return benefits.length === 0
      ? undefined
      : benefits.find((b: any) => b.id === parseInt(params.idBenefit));
  }
}
