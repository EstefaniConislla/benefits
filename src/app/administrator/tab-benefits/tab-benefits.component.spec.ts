import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBenefitsComponent } from './tab-benefits.component';

describe('TabBenefitsComponent', () => {
  let component: TabBenefitsComponent;
  let fixture: ComponentFixture<TabBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabBenefitsComponent]
    });
    fixture = TestBed.createComponent(TabBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
