import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearrescueComponent } from './bearrescue.component';

describe('BearrescueComponent', () => {
  let component: BearrescueComponent;
  let fixture: ComponentFixture<BearrescueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearrescueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearrescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
