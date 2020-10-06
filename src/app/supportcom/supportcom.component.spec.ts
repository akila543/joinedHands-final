import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportcomComponent } from './supportcom.component';

describe('SupportcomComponent', () => {
  let component: SupportcomComponent;
  let fixture: ComponentFixture<SupportcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
