import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrockpotComponent } from './crockpot.component';

describe('CrockpotComponent', () => {
  let component: CrockpotComponent;
  let fixture: ComponentFixture<CrockpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrockpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrockpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
