import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaTypeComponent } from './malaria-type.component';

describe('MalariaTypeComponent', () => {
  let component: MalariaTypeComponent;
  let fixture: ComponentFixture<MalariaTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
