import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSearchProfileComponent } from './modal-search-profile.component';

describe('ModalSearchProfileComponent', () => {
  let component: ModalSearchProfileComponent;
  let fixture: ComponentFixture<ModalSearchProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSearchProfileComponent],
    });
    fixture = TestBed.createComponent(ModalSearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
