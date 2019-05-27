import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesEditComponent } from './causes-edit.component';

describe('CausesEditComponent', () => {
  let component: CausesEditComponent;
  let fixture: ComponentFixture<CausesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
