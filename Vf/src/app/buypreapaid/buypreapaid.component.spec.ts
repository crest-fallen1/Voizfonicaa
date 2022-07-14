import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypreapaidComponent } from './buypreapaid.component';

describe('BuypreapaidComponent', () => {
  let component: BuypreapaidComponent;
  let fixture: ComponentFixture<BuypreapaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuypreapaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuypreapaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
