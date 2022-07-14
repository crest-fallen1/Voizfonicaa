import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypostpaidComponent } from './buypostpaid.component';

describe('BuypostpaidComponent', () => {
  let component: BuypostpaidComponent;
  let fixture: ComponentFixture<BuypostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuypostpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuypostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
