import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketDescComponent } from './cricket-desc.component';

describe('CricketDescComponent', () => {
  let component: CricketDescComponent;
  let fixture: ComponentFixture<CricketDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
