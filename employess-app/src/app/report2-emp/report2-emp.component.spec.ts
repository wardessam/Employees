import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2EmpComponent } from './report2-emp.component';

describe('Report2EmpComponent', () => {
  let component: Report2EmpComponent;
  let fixture: ComponentFixture<Report2EmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report2EmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
