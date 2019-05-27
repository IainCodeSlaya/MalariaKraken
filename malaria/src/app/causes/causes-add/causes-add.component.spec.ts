import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesAddComponent } from './causes-add.component';

describe('CausesAddComponent', () => {
  let component: CausesAddComponent;
  let fixture: ComponentFixture<CausesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
