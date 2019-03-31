import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtastingComponent } from './foodtasting.component';

describe('FoodtastingComponent', () => {
  let component: FoodtastingComponent;
  let fixture: ComponentFixture<FoodtastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
