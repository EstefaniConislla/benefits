import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBenefitsComponent } from './single-benefits.component';

describe('SingleBenefitsComponent', () => {
  let component: SingleBenefitsComponent;
  let fixture: ComponentFixture<SingleBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBenefitsComponent],
    });
    fixture = TestBed.createComponent(SingleBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
