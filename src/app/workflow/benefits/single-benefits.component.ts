import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-benefits',
  templateUrl: './single-benefits.component.html',
  styleUrls: ['./single-benefits.component.scss'],
})
export class SingleBenefitsComponent {
  constructor(private route: ActivatedRoute) {}
}
