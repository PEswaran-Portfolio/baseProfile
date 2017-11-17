import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfGoalsComponent } from './prof-goals.component';

describe('ProfGoalsComponent', () => {
  let component: ProfGoalsComponent;
  let fixture: ComponentFixture<ProfGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
