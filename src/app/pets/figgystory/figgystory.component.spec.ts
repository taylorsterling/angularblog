import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiggystoryComponent } from './figgystory.component';

describe('FiggystoryComponent', () => {
  let component: FiggystoryComponent;
  let fixture: ComponentFixture<FiggystoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiggystoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiggystoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
