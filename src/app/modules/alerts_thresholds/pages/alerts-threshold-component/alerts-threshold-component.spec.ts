import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsThresholdComponent } from './alerts-threshold-component';

describe('AlertsThresholdComponent', () => {
  let component: AlertsThresholdComponent;
  let fixture: ComponentFixture<AlertsThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsThresholdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
