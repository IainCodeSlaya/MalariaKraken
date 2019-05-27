import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionCycleComponent } from './infection-cycle.component';

describe('InfectionCycleComponent', () => {
  let component: InfectionCycleComponent;
  let fixture: ComponentFixture<InfectionCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfectionCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
