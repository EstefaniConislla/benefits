/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-benefit-header',
  templateUrl: './benefit-header.component.html',
  styleUrls: ['./benefit-header.component.scss'],
})
export class BenefitHeaderComponent implements OnInit {
  showHyperLink = false;
  title = '';
  description = '';
  mira = true;
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 0) {
      this.mira = false;
    } else {
      this.mira = true;
    }
  }
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.router.queryParams.subscribe((params: any) => {
      const benefits = JSON.parse(localStorage.getItem('benefits') ?? '');
      const benefit = benefits.filter(
        (b: any) => b.id === parseInt(params.idBenefit),
      )[0];

      this.title = benefit.title;
      this.description = benefit.description;

      if (benefit.link !== '') {
        this.showHyperLink = true;
      }
    });
  }
}
