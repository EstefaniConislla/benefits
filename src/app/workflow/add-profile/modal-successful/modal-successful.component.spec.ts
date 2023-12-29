import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuccessfulComponent } from './modal-successful.component';

describe('ModalSuccessfulComponent', () => {
  let component: ModalSuccessfulComponent;
  let fixture: ComponentFixture<ModalSuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSuccessfulComponent],
    });
    fixture = TestBed.createComponent(ModalSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
