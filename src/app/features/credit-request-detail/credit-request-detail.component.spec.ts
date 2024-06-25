import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRequestDetailComponent } from './credit-request-detail.component';

describe('CreditRequestDetailComponent', () => {
  let component: CreditRequestDetailComponent;
  let fixture: ComponentFixture<CreditRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditRequestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
