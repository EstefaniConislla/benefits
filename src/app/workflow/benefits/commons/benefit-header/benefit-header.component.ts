import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { CategoriesService } from 'src/app/home/categories/services/categories.service';
import { CommmonService } from 'src/app/utils/common.service';

@Component({
  selector: 'app-benefit-header',
  templateUrl: './benefit-header.component.html',
  styleUrls: ['./benefit-header.component.scss'],
})
export class BenefitHeaderComponent {
  public showHyperLink: boolean = false;
  public title: string = '';
  public description: string = '';
  public mira: boolean = true;
  public baseBenefit: string = '';
  public baseAntiquity: string = '';
  public category: string = '';
  public antiquity: string = '';
  public plan: string = '';
  public beneficiaryType: string = '';
  public link: string = '';

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
      this.commonService.getItemLocalStorage('plans') ?? '[]',
    );

    this.router.queryParams.subscribe((params: any) => {
      const benefit = this.getBenefit(params);
      if (benefit) {
        this.title = benefit.title;
        this.description = benefit.description;
        this.category = categories.find(
          (c: any) => c.id === benefit.categories[0],
        ).description;
        this.antiquity = antiques.find(
          (a: any) => a.id === benefit.antiques[0],
        ).description;
        this.plan = antiques.find(
          (p: any) => p.id === benefit.plans[0],
        ).description;
        this.link = benefit.link;
        this.beneficiaryType =
          beneficiaryTypes.length === 4
            ? 'Todos'
            : beneficiaryTypes.find(
                (p: any) => p.id === benefit.beneficiaryTypes[0],
              ).description;

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
