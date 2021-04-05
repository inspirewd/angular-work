import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerykiComponent } from './generyki.component';

describe('GenerykiComponent', () => {
  let component: GenerykiComponent;
  let fixture: ComponentFixture<GenerykiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerykiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerykiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
