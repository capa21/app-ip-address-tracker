import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLocationInformationComponent } from './general-location-information.component';

describe('GeneralLocationInformationComponent', () => {
  let component: GeneralLocationInformationComponent;
  let fixture: ComponentFixture<GeneralLocationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLocationInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLocationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
