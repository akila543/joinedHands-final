import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcomhomepageComponent } from './medcomhomepage.component';

describe('MedcomhomepageComponent', () => {
  let component: MedcomhomepageComponent;
  let fixture: ComponentFixture<MedcomhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedcomhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcomhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
