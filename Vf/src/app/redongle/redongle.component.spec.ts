import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedongleComponent } from './redongle.component';

describe('RedongleComponent', () => {
  let component: RedongleComponent;
  let fixture: ComponentFixture<RedongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedongleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
