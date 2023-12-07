import { Component, Input } from '@angular/core';
import { Benefits } from 'src/app/home/models/benefts.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-benefit',
  templateUrl: './card-benefit.component.html',
  styleUrls: ['./card-benefit.component.scss'],
})
export class CardBenefitComponent {
  @Input() benefit!: Benefits;

  constructor(private router: Router) {}

  goToDetailBenefit() {
    console.log(this.benefit);
    this.router.navigate(['/benefits'], {
      queryParams: { idBenefit: this.benefit.id },
    });
  }
}
