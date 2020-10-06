import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlttherapyComponent } from './alttherapy.component';

describe('AlttherapyComponent', () => {
  let component: AlttherapyComponent;
  let fixture: ComponentFixture<AlttherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlttherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlttherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
