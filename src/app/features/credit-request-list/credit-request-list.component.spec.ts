import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRequestListComponent } from './credit-request-list.component';

describe('CreditRequestListComponent', () => {
  let component: CreditRequestListComponent;
  let fixture: ComponentFixture<CreditRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
