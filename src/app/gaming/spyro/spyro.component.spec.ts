import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyroComponent } from './spyro.component';

describe('SpyroComponent', () => {
  let component: SpyroComponent;
  let fixture: ComponentFixture<SpyroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
