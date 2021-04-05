import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Klasy2Component } from './klasy2.component';

describe('Klasy2Component', () => {
  let component: Klasy2Component;
  let fixture: ComponentFixture<Klasy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Klasy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Klasy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
