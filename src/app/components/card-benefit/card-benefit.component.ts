import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-benefit',
  templateUrl: './card-benefit.component.html',
  styleUrls: ['./card-benefit.component.scss'],
})
export class CardBenefitComponent {
  @Input() image!: string;
  @Input() isCopec!: boolean;
  @Input() isNewBenefit!: boolean;
  @Input() title!: string;
  @Input() description!: string;
  @Input() textLabel!: string;
}
