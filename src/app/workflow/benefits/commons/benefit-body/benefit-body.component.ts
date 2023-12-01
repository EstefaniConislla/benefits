import { Component } from '@angular/core';

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
}
