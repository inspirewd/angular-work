import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFilterComponent } from './prime-filter.component';

describe('PrimeFilterComponent', () => {
  let component: PrimeFilterComponent;
  let fixture: ComponentFixture<PrimeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
