import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfejsyComponent } from './interfejsy.component';

describe('InterfejsyComponent', () => {
  let component: InterfejsyComponent;
  let fixture: ComponentFixture<InterfejsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfejsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfejsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
