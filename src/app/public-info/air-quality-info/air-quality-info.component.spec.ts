import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityInfoComponent } from './air-quality-info.component';

describe('AirQualityInfoComponent', () => {
  let component: AirQualityInfoComponent;
  let fixture: ComponentFixture<AirQualityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirQualityInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirQualityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
