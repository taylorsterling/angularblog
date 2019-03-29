import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenalfredoComponent } from './chickenalfredo.component';

describe('ChickenalfredoComponent', () => {
  let component: ChickenalfredoComponent;
  let fixture: ComponentFixture<ChickenalfredoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenalfredoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenalfredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
