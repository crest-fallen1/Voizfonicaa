import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpostComponent } from './billpost.component';

describe('BillpostComponent', () => {
  let component: BillpostComponent;
  let fixture: ComponentFixture<BillpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
