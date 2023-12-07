import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-benefits',
  templateUrl: './single-benefits.component.html',
  styleUrls: ['./single-benefits.component.scss'],
})
export class SingleBenefitsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      console.log(params); // { order: "popular" }
    });
  }
}
