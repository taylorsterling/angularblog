import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickentacosComponent } from './chickentacos.component';

describe('ChickentacosComponent', () => {
  let component: ChickentacosComponent;
  let fixture: ComponentFixture<ChickentacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickentacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickentacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
