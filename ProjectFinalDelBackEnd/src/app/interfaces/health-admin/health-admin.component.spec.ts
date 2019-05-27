import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAdminComponent } from './health-admin.component';

describe('HealthAdminComponent', () => {
  let component: HealthAdminComponent;
  let fixture: ComponentFixture<HealthAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
