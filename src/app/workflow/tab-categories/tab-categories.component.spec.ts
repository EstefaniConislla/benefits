import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCategoriesComponent } from './tab-categories.component';

describe('TabBenefitsComponent', () => {
  let component: TabCategoriesComponent;
  let fixture: ComponentFixture<TabCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabCategoriesComponent],
    });
    fixture = TestBed.createComponent(TabCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
