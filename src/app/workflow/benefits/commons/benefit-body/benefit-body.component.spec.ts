import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitBodyComponent } from './benefit-body.component';

describe('BenefitBodyComponent', () => {
  let component: BenefitBodyComponent;
  let fixture: ComponentFixture<BenefitBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitBodyComponent],
    });
    fixture = TestBed.createComponent(BenefitBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
