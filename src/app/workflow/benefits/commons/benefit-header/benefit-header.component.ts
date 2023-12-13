/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/home/categories/services/categories.service';
import { CommmonService } from 'src/app/utils/common.service';

@Component({
  selector: 'app-benefit-header',
  templateUrl: './benefit-header.component.html',
  styleUrls: ['./benefit-header.component.scss'],
})
export class BenefitHeaderComponent implements OnInit {
  public showHyperLink = false;
  public title = '';
  public description = '';
  public mira = true;
  public baseBenefit = '';
  public baseAntiquity = '';
  public category = '';
  public antiquity = '';
  public plan = '';
  public beneficiaryType = '';
  public link = '';
  public longDescription = '';
  public image = '';

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 0) {
      this.mira = false;
    } else {
      this.mira = true;
    }
  }
  constructor(
    private router: ActivatedRoute,
    private categoriesService: CategoriesService,
    private commonService: CommmonService,
  ) {}

  async ngOnInit() {
    const categories = JSON.parse(
      this.commonService.getItemLocalStorage('categories') ?? '[]',
    );
    const antiques = JSON.parse(
      this.commonService.getItemLocalStorage('antiques') ?? '[]',
    );
    const plans = JSON.parse(
      this.commonService.getItemLocalStorage('plans') ?? '[]',
    );
    const beneficiaryTypes = JSON.parse(
      this.commonService.getItemLocalStorage('beneficiaryTypes') ?? '[]',
    );

    this.router.queryParams.subscribe((params: any) => {
      const benefit = this.getBenefit(params);
      if (benefit) {
        console.log(benefit);
        this.title = benefit.title;
        this.description = benefit.description;
        this.longDescription = benefit.longDescription;
        this.category = categories.find(
          (c: any) => c.id === benefit.categories[0],
        ).description;
        this.antiquity = antiques.find(
          (a: any) => a.id === benefit.antiques[0],
        ).description;
        this.plan = plans.find((p: any) => p.id === benefit.plans[0]).titleplan;
        this.link = benefit.link;
        this.image = benefit.image;
        //this.beneficiaryType = beneficiaryTypes.length === 4 ? "Todos" : beneficiaryTypes.find((p: any) => p.id === benefit.beneficiaryTypes[0]).description;
        console.log(benefit.beneficiaryTypes.length);
        if (benefit.beneficiaryTypes.length === beneficiaryTypes.length) {
          this.beneficiaryType = 'Todos';
        } else {
          const filteredDescriptions = beneficiaryTypes
            .filter((item: any) => benefit.beneficiaryTypes.includes(item.id))
            .map((item: any) => item.description);
          console.log(filteredDescriptions);
          this.beneficiaryType = filteredDescriptions.join(', ');
        }

        if (benefit.link !== '') {
          this.showHyperLink = true;
        }
      }
    });
  }

  goToLink() {
    window.location.href = this.link;
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
