import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilldongleComponent } from './billdongle.component';

describe('BilldongleComponent', () => {
  let component: BilldongleComponent;
  let fixture: ComponentFixture<BilldongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilldongleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilldongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
