import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpresponsesComponent } from './helpresponses.component';

describe('HelpresponsesComponent', () => {
  let component: HelpresponsesComponent;
  let fixture: ComponentFixture<HelpresponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpresponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpresponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
