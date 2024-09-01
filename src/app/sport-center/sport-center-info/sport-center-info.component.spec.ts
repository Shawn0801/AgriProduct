import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCenterInfoComponent } from './sport-center-info.component';

describe('SportCenterInfoComponent', () => {
  let component: SportCenterInfoComponent;
  let fixture: ComponentFixture<SportCenterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportCenterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportCenterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
