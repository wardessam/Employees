import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1EmpComponent } from './report1-emp.component';

describe('Report1EmpComponent', () => {
  let component: Report1EmpComponent;
  let fixture: ComponentFixture<Report1EmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report1EmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
