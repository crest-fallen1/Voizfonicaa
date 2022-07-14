import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprepaidComponent } from './reprepaid.component';

describe('ReprepaidComponent', () => {
  let component: ReprepaidComponent;
  let fixture: ComponentFixture<ReprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprepaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
