import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-benefit-header',
  templateUrl: './benefit-header.component.html',
  styleUrls: ['./benefit-header.component.scss'],
})
export class BenefitHeaderComponent {
  mira = true;

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 0) {
      this.mira = false;
    } else {
      this.mira = true;
    }
  }
}
