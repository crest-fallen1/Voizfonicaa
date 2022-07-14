import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuydongleComponent } from './buydongle.component';

describe('BuydongleComponent', () => {
  let component: BuydongleComponent;
  let fixture: ComponentFixture<BuydongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuydongleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuydongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
