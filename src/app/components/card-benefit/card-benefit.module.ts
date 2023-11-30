import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBenefitComponent } from './card-benefit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardBenefitComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [CardBenefitComponent],
})
export class CardBenefitModule {}
