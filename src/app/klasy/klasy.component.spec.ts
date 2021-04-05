import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasyComponent } from './klasy.component';

describe('KlasyComponent', () => {
  let component: KlasyComponent;
  let fixture: ComponentFixture<KlasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
