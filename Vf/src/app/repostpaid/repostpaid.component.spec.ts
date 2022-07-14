import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostpaidComponent } from './repostpaid.component';

describe('RepostpaidComponent', () => {
  let component: RepostpaidComponent;
  let fixture: ComponentFixture<RepostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepostpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
