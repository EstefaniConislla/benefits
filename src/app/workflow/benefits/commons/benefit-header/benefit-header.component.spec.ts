import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitHeaderComponent } from './benefit-header.component';

describe('BenefitHeaderComponent', () => {
  let component: BenefitHeaderComponent;
  let fixture: ComponentFixture<BenefitHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitHeaderComponent],
    });
    fixture = TestBed.createComponent(BenefitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
